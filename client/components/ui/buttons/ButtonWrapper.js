import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropCart } from "@/store/features/actions/cart.action";
import { dropItemCart } from "@/store/features/reducers/cartSlice";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Spinner from "../loading/Spinner";
import Notifies from "@/utils/notify.utils";

// This values are the props in the UI
const amount = "100";
const currency = "USD";
const style = {};

// Custom component to wrap the PayPalButtons and handle currency changes
function ButtonWrapper({ currency, showSpinner, emailCustomer, user_id }) {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [paymentInfo, setPaymentInfo] = useState({});
  const dispatchAction = useDispatch();
  const { cartItems, total, totalDiscount } = useSelector(
    (state) => state.cart
  );

  const { currUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <Spinner />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[cartItems, emailCustomer]}
        fundingSource={"paypal"}
        // createOrder={(data, actions) => {
        //   // console.log("create order: data, action", data, actions);
        //   return actions.order
        //     .create({
        //       purchase_units: [
        //         {
        //           amount: {
        //             currency_code: currency,
        //             value: Number(total - totalDiscount).toFixed(2),
        //           },
        //         },
        //       ],
        //     })
        //     .then((orderId) => {
        //       // Your code here after create the order
        //       setPaymentInfo({
        //         user_id: currUser?.data._id || "",
        //         order_no: orderId,
        //         email: emailCustomer,
        //         total: total,
        //         items: cartItems,
        //       });

        //       return orderId;
        //     });
        // }}
        createOrder={async (data, actions) => {
          try {
            const response = await fetch(
              "http://localhost:8080/api/client/orders",
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  cartItems,
                  total,
                  totalDiscount,
                }),
              }
            );

            if (!response.ok) {
              const data = await response.json();

              Notifies.error(data.message || data.error);
              return;
            }

            const details = await response.json();
            return details.id;
          } catch (error) {
            Notifies.error("unexpected error");
          }
        }}
        onApprove={async (data, actions) => {
          try {
            const response = await fetch(
              `http://localhost:8080/api/client/orders/${data.orderID}/capture`,
              {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: emailCustomer,
                  items: cartItems,
                  user_id: user_id,
                }),
              }
            );

            const details = await response.json();
            const errorDetail =
              Array.isArray(details.details) && details.details[0];

            if (errorDetail && errorDetail.issue === "INSTRUMENT_DECLINED") {
              return actions.restart();
            }

            if (errorDetail) {
              let msg = "Sorry, your transaction could not be processed.";
              msg += errorDetail.description
                ? " " + errorDetail.description
                : "";
              msg += details.debug_id ? " (" + details.debug_id + ")" : "";
              Notifies.error(msg);
            }
            if (currUser) {
              dispatchAction(dropCart(currUser.data._id));
            } else {
              dispatchAction(dropItemCart());
            }
            Notifies.success("Thank you for your purchase 🎉");
            // router.push("/FlashCards");
          } catch (error) {
            console.error(error);
            // Notifies.error(error);
            // Handle the error or display an appropriate error message to the user
          }
        }}
      />
    </>
  );
}

export default ButtonWrapper;
