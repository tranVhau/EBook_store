import React, { useState } from "react";

import { useSelector } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import HorizonBookCart from "@/components/product/HorizonBookCart";
import ButtonWrapper from "@/components/ui/buttons/ButtonWrapper";
import ArrowIcon from "@/public/svgs/show-more.svg";
import DoneIcon from "@/public/svgs/check.svg";

function Checkout() {
  const { cartItems, total, totalDiscount } = useSelector(
    (state) => state.cart
  );

  const { currUser } = useSelector((state) => state.auth);
  const [emailCustomer, setEmailCustomer] = useState(currUser?.email);

  const getEmailHandler = (e) => {
    setTimeout(() => {
      setEmailCustomer(e.target.value);
    }, 1000);
  };

  return (
    <div className="font-tiltwrap">
      <div className="flex justify-center text-my-deeper-ocean">
        <div className="flex w-11/12 justify-between   border-b border-gray-200 p-4">
          <div className=" text-3xl text-my-deeper-ocean">Checkout</div>
          <div className="flex items-center  ">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-300 mx-1">
              <DoneIcon className="inline" />
            </span>
            <span className="cursor-pointer">shopping</span>

            <ArrowIcon className="inline mx-2" />

            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-700 text-white mx-1">
              2
            </span>
            <span className="underline cursor-pointer">Payment</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7  h-full mx-auto w-11/12 text-my-deeper-ocean">
        <div className="md:col-span-4 col-span-full h-4/5 mx-2 p-2">
          <div className="py-1">
            <label className=" text-2xl">Your Cart</label>
            <p className="opacity-60 py-2 my-3 font-normal">
              Make sure there are all your selected items
            </p>
          </div>
          <div className="border my-6 h-96 border-gray-200 rounded-md overflow-auto">
            {cartItems[0] ? (
              cartItems?.map((item) => (
                <HorizonBookCart key={item?._id} item={item} />
              ))
            ) : (
              <div className=" text-my-deeper-ocean h-full flex items-center justify-center">
                <div>Nothing to checkout!!!</div>
              </div>
            )}
          </div>
        </div>
        <div className="md:col-span-3 col-span-full mx-2 bg-slate-100 p-4">
          <label className="  text-2xl">Payment Method</label>
          <div className="w-full my-6">
            <div className="my-4  ">
              <label className=" mb-1">email (required):</label>
              <input
                onKeyUp={getEmailHandler}
                name="email"
                type="email"
                placeholder={emailCustomer}
                className="block text-sm py-3 px-3 my-2 rounded-2xl w-full border bg-slate-200 border-gray-400 "
              ></input>
            </div>
            <div className="my-4  ">
              <label className=" mb-1">phone number (optional): </label>
              <input
                type={"text"}
                onChange={() => {}}
                value={currUser?.phone ? currUser?.phone : undefined}
                placeholder={"0123 456 789"}
                className="block text-sm py-3 px-3 my-2 rounded-2xl w-full border bg-slate-200 border-gray-400 "
              ></input>
            </div>
          </div>
          <div className="my-4">
            <div className=" border-t border-b border-gray-300">
              <div className="flex justify-between my-2">
                <span className=" ">Subtotal:</span>
                <span className=" text-lg">{`$ ${Math.abs(
                  Number(total).toFixed(2)
                )}`}</span>
              </div>
              <div className="flex justify-between my-2">
                <span className=" ">Discount:</span>
                <span className=" text-lg">{`- $ ${Math.abs(
                  Number(totalDiscount).toFixed(2)
                )}`}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between my-4">
                <span className=" ">Total:</span>
                <span className=" text-lg">{`$ ${Math.abs(
                  Number(total - totalDiscount)
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <div className=" relative z-0 w-full py-2 ">
              <PayPalScriptProvider
                options={{
                  clientId:
                    "AUltZkePSM4O0HoRe_99x0JSnU4ymGhkgDjrUdSNBBuDEaygNOgfm8fNqizjQ9baZWtoEgLtI1K0PrUS",
                  components: "buttons",
                  currency: "USD",
                }}
              >
                <ButtonWrapper
                  currency="USD"
                  showSpinner={true}
                  emailCustomer={emailCustomer || currUser?.email}
                  user_id={currUser?._id || null}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
