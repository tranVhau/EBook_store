import React, { useState } from "react";
import CancelIcon from "@/public/svgs/cancel.svg";

import { useSelector, useDispatch } from "react-redux";
import { isCloseCartSelector } from "@/store/selectors";
import { toggleCart } from "@/store/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const isClose = useSelector(isCloseCartSelector);

  const closeButtonHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <div>
      <div className={`${isClose ? "relative z-50" : "invisible"}`}>
        <div
          className={`${
            isClose ? "opacity-100" : "opacity-0"
          } fixed inset-0 bg-gray-800 bg-opacity-75 duration-500`}
        ></div>

        <div className={`fixed inset-0 overflow-hidden  `}>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`${
                isClose ? "translate-x-0" : " translate-x-full"
              }  fixed inset-y-0 right-0 flex max-w-full pl-10 ease-in-out duration-500`}
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                    <div className="flex items-start justify-between font-tiltwrap">
                      <h2 className="text-2xl text-gray-900 ">Your Cart</h2>
                      <div
                        onClick={closeButtonHandler}
                        className="ml-3 flex cursor-pointer h-7 items-center p-1 rounded-2xl hover:bg-slate-200 duration-500"
                      >
                        <CancelIcon />
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          <li className="flex py-6">
                            <div className="h-36 w-28 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                                alt="cart item"
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-lg font-medium text-gray-900">
                                  <h3>
                                    <p>Throwbpck Hip Bag</p>
                                  </h3>
                                  <p className="ml-4">$90.00</p>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                  By Salmon
                                </p>
                                <div className="mt-3">
                                  <div className="inline-block font-semibold bg-yellow-300 p-1 rounded-md">
                                    cate 1
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex">
                                  <button
                                    type="button"
                                    className="font-medium text-base text-blue-600 hover:text-orange-500 duration-300"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between font-tiltwrap text-xl font-medium text-gray-900">
                      <p>Total</p>
                      <p>$262.00</p>
                    </div>
                    <div className="mt-6">
                      <button className="flex w-full items-center justify-center font-tiltwrap rounded-md  border-2 border-gray-800 bg-slate-800 px-6 py-3 text-white hover:bg-white hover:text-gray-900 ease-in-out duration-500">
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
