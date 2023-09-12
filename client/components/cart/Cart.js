import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import CancelIcon from "@/public/svgs/cancel.svg";

import CartItem from "./CartItem";

import { isCloseCartSelector } from "@/store/selectors";
import { toggleCart } from "@/store/features/reducers/cartSlice";
import { dropCart } from "@/store/features/actions/cart.action";
import { dropItemCart } from "@/store/features/reducers/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const isClose = useSelector(isCloseCartSelector);
  const { cartItems, total, totalDiscount } = useSelector(
    (state) => state.cart
  );
  const { currUser } = useSelector((state) => state.auth);

  const closeButtonHandler = () => {
    dispatch(toggleCart());
  };

  const dropCartHandler = () => {
    if (currUser) {
      dispatch(dropCart(currUser._id));
    } else {
      dispatch(dropItemCart());
    }
  };

  return (
    <div className="z-50">
      <div className={`${isClose ? "relative" : "invisible"}  z-50`}>
        <div
          className={`${
            isClose ? "opacity-100" : "opacity-0"
          } fixed inset-0 bg-gray-800 bg-opacity-75 duration-500`}
        ></div>

        <div className={`fixed inset-0 overflow-hidden z-50`}>
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`${
                isClose ? "translate-x-0" : " translate-x-full"
              }  fixed inset-y-0 right-0 flex max-w-full pl-10 ease-in-out duration-500`}
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white shadow-xl">
                  <div className="flex pt-6 px-4 items-start justify-between font-tiltwrap ">
                    <h2 className="text-2xl text-gray-900 ">Your Cart</h2>
                    <div
                      onClick={closeButtonHandler}
                      className="ml-3 flex cursor-pointer h-7 items-center p-1 rounded-2xl hover:bg-slate-200 duration-500"
                    >
                      <CancelIcon />
                    </div>
                  </div>
                  <div className="flex-1 px-4 sm:px-6 overflow-y-scroll">
                    {!cartItems[0] ? (
                      <div className="font-tiltwrap text-my-deeper-ocean h-full flex items-center justify-center">
                        <div>your cart is empty!!</div>
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <CartItem key={item._id} item={item} />
                      ))
                    )}
                  </div>

                  <div className="border-t border-gray-200 py-4 px-4 sm:px-6">
                    <div className="flex justify-between font-tiltwrap text-md font-medium text-gray-900">
                      <p>SubTotal</p>
                      <p>{`$ ${Math.abs(Number(total).toFixed(2))}`}</p>
                    </div>
                    <div className="flex justify-between font-tiltwrap text-md font-medium text-gray-900">
                      <p>Discount</p>
                      <p>{`- $ ${Math.abs(
                        Number(totalDiscount).toFixed(2)
                      )}`}</p>
                    </div>
                    <div className="flex justify-between font-tiltwrap text-md font-medium text-gray-900">
                      <p>Total</p>
                      <p>{`$ ${Math.abs(Number(total - totalDiscount)).toFixed(
                        2
                      )}`}</p>
                    </div>
                    <div className="mt-6">
                      <Link
                        className="flex w-full items-center justify-center font-tiltwrap rounded-md  border-2 border-gray-800 bg-slate-800 px-6 py-3 text-white hover:bg-white hover:text-gray-900 ease-in-out duration-500"
                        onClick={closeButtonHandler}
                        href={"/checkout"}
                      >
                        Checkout
                      </Link>

                      <div className="text-center"> or </div>
                      <button
                        onClick={dropCartHandler}
                        className="flex w-full items-center justify-center font-tiltwrap rounded-md hover:underline"
                      >
                        Drop Cart
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
