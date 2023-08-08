const fetch = require("node-fetch");

const { PAYPAL_CLIENT_ID, PAYPAL_SECRET_ID } = process.env;
const base = "https://api-m.sandbox.paypal.com";

const generateAccessToken = async () => {
  try {
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_SECRET_ID
    ).toString("base64");
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "post",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Failed to generate Access Token:", error);
  }
};

const createOrder = async (order) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders`;

  const purchase_units = order.cartItems.map((item, index) => {
    const discountedPrice = (item.price * (100 - item.discount)) / 100;

    return {
      reference_id: `unit_${index + 1}`,
      amount: {
        currency_code: "USD",
        value: discountedPrice.toFixed(2),
        breakdown: {
          item_total: {
            currency_code: "USD",
            value: discountedPrice.toFixed(2),
          },
        },
      },
      items: [
        {
          name: item.name,
          description: `discount ${item.discount}% already included`,
          sku: item._id,
          unit_amount: {
            currency_code: "USD",
            value: discountedPrice.toFixed(2),
          },
          quantity: 1,
        },
      ],
    };
  });

  const payload = {
    intent: "CAPTURE",
    purchase_units: purchase_units,
  };

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  return handleResponse(response);
};

const capturePayment = async (orderID) => {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderID}/capture`;

  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return handleResponse(response);
};

const handleResponse = async (response) => {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }
  const errorMessage = await response.text();
  throw new Error(errorMessage);
};

module.exports = {
  handleResponse,
  createOrder,
  generateAccessToken,
  capturePayment,
};
