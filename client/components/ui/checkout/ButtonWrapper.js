import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dropCart } from "@/store/features/actions/cart.action";
import { dropItemCart } from "@/store/features/reducers/cartSlice";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import Spinner from "../loading/Spinner";

// This values are the props in the UI
const amount = "100";
const currency = "USD";
const style = {};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, emailCustomer }) => {
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
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          // console.log("create order: data, action", data, actions);
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: Number(total - totalDiscount).toFixed(2),
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              setPaymentInfo({
                user_id: currUser?.data._id || "",
                order_no: orderId,
                email: emailCustomer,
                total: total,
                items: cartItems,
              });

              // console.log({
              //   user_id: currUser?.data._id || "",
              //   order_no: orderId,
              //   email: emailCustomer,
              //   total: total,
              //   items: cartItems,
              // });
              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          console.log(paymentInfo);

          // if (currUser) {
          //   dispatchAction(dropCart(currUser.data._id));
          // } else {
          //   dispatchAction(dropItemCart());
          // }
          return actions.order.capture().then(function () {
            // Your code here after capture the order
          });
        }}
      />
    </>
  );
};

export default ButtonWrapper;
