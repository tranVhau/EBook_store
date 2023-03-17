import React from "react";
import HorizonBookCart from "@/components/product/HorizonBookCart";
import ArrowIcon from "@/public/svgs/show-more.svg";
import DoneIcon from "@/public/svgs/check.svg";

function index() {
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
      <div className="grid grid-cols-7 h-screen mx-auto w-11/12">
        <div className="col-span-4 mx-2 p-2">
          <div className="py-1">
            <label className="font-tiltwrap text-2xl">Your Cart</label>
            <p className="opacity-60 font-normal">
              Make sure there are all your selected items
            </p>
          </div>
          <div className="border border-gray-200 h-96 rounded-md overflow-auto">
            <HorizonBookCart />
            <HorizonBookCart />
            <HorizonBookCart />
            <HorizonBookCart />
            <HorizonBookCart />
            <HorizonBookCart />
          </div>
        </div>
        <div className="col-span-3 mx-2 bg-slate-100 p-4">
          <label className="font-tiltwrap text-2xl">Payment Method</label>
          <div className="w-full">
            <div className="my-4  ">
              <label className="font-tiltwrap mb-1">email:</label>
              <input
                type={"text"}
                placeholder={"@email"}
                className="w-full px-3 py-2 rounded text-sm border-gray-400 focus:border-gray-800 "
              ></input>
            </div>
            <div className="my-4  ">
              <label className="font-tiltwrap mb-1">phome number: </label>
              <input
                type={"text"}
                placeholder={"@phone"}
                className="w-full px-3 py-2 rounded text-sm border-gray-400 focus:border-gray-800 "
              ></input>
            </div>
          </div>
          <div className="my-4">
            <div className=" border-t border-b border-gray-300">
              <div className="flex justify-between my-2">
                <span className="font-tiltwrap ">Subtotal:</span>
                <span className="font-semibold text-2xl">$1230</span>
              </div>
              <div className="flex justify-between my-2">
                <span className="font-tiltwrap ">Discount:</span>
                <span className="font-semibold text-2xl">10%</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between my-4">
                <span className="font-tiltwrap ">Total:</span>
                <span className="font-semibold text-2xl">$1000</span>
              </div>
            </div>
            <div className="w-full py-2 cursor-pointer text-center font-tiltwrap text-xl text-white border-2 border-gray-800 bg-gray-800 rounded hover:bg-white hover:text-gray-800 duration-500">
              Place Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
