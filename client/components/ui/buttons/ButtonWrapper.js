import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropCart } from "@/store/features/actions/cart.action";
import { dropItemCart } from "@/store/features/reducers/cartSlice";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Spinner from "../loading/Spinner";
import Notifies from "@/utils/notify.utils";

import getConfig from "next/config";
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const apiUrl = serverRuntimeConfig.apiUrl || publicRuntimeConfig.apiUrl;

// This values are the props in the UI
const style = {};
function ButtonWrapper({ currency, showSpinner, emailCustomer, user_id }) {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
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
        createOrder={async (data, actions) => {
          try {
            const response = await fetch(`${apiUrl}/orders`, {
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
            });

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
              `${apiUrl}/orders/${data.orderID}/capture`,
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
            } else {
              console.log("here");
              Notifies.success("Thank you for your purchase 🎉");
              if (currUser) {
                dispatchAction(dropCart(currUser._id));
              } else {
                dispatchAction(dropItemCart());
              }
            }
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
