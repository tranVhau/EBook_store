import React, { useState } from "react";

import { useSelector } from "react-redux";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import HorizonBookCart from "@/components/product/HorizonBookCart";
import ButtonWrapper from "@/components/ui/checkout/ButtonWrapper";
import ArrowIcon from "@/public/svgs/show-more.svg";
import DoneIcon from "@/public/svgs/check.svg";

function Index() {
  const { cartItems, total, totalDiscount } = useSelector(
    (state) => state.cart
  );
  const { currUser } = useSelector((state) => state.auth);
  const [emailCustomer, setEmailCustomer] = useState(currUser?.data.email);

  const getEmailHandler = (e) => {
    setEmailCustomer(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex w-11/12 justify-between   border-b border-gray-200 p-4">
          <div className="font-tiltwrap text-3xl text-my-deeper-ocean">
            Checkout
          </div>
          <div className="flex items-center font-semibold">
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
      <div className="grid grid-cols-7 h-full mx-auto w-11/12">
        <div className="col-span-4 h-4/5 mx-2 p-2">
          <div className="py-1">
            <label className="font-tiltwrap text-2xl">Your Cart</label>
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
              <div className="font-tiltwrap text-my-deeper-ocean h-full flex items-center justify-center">
                <div>Nothing to checkout!!!</div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-3 mx-2 bg-slate-100 p-4">
          <label className="font-tiltwrap  text-2xl">Payment Method</label>
          <div className="w-full my-6">
            <div className="my-4  ">
              <label className="font-tiltwrap mb-1">email (required):</label>
              <input
                onChange={getEmailHandler}
                name="email"
                type="email"
                value={currUser ? emailCustomer : undefined}
                placeholder="email@email.com"
                className="block text-sm py-3 px-3 my-2 rounded-2xl w-full border border-gray-400 font-tiltwrap"
              ></input>
            </div>
            <div className="my-4  ">
              <label className="font-tiltwrap mb-1">
                phone number (optional):{" "}
              </label>
              <input
                type={"text"}
                onChange={() => {}}
                value={currUser ? currUser?.data.phone : undefined}
                placeholder={"0123 456 789"}
                className="block text-sm py-3 px-3 my-2 rounded-2xl w-full border border-gray-400 font-tiltwrap"
              ></input>
            </div>
          </div>
          <div className="my-4">
            <div className=" border-t border-b border-gray-300">
              <div className="flex justify-between my-2">
                <span className="font-tiltwrap ">Subtotal:</span>
                <span className="font-tiltwrap text-lg">{`$ ${Math.abs(
                  Number(total).toFixed(2)
                )}`}</span>
              </div>
              <div className="flex justify-between my-2">
                <span className="font-tiltwrap ">Discount:</span>
                <span className="font-tiltwrap text-lg">{`- $ ${Math.abs(
                  Number(totalDiscount).toFixed(2)
                )}`}</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between my-4">
                <span className="font-tiltwrap ">Total:</span>
                <span className="font-tiltwrap text-lg">{`$ ${Math.abs(
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
                  emailCustomer={emailCustomer}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
