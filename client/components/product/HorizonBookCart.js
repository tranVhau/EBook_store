import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/features/actions/cart.action";
import { removeItemFromCart } from "@/store/features/reducers/cartSlice";

import Image from "next/image";
import CancelIcon from "@/public/svgs/cancel.svg";

function HorizonBookCart({ item }) {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.auth);

  const removeCartItemHandler = () => {
    if (currUser) {
      dispatch(removeFromCart({ user_id: currUser.data._id, item: item._id }));
    } else {
      dispatch(removeItemFromCart({ _id: item._id, price: item.price }));
    }
  };

  return (
    <div className="relative flex flex-col rounded-lg bg-white sm:flex-row m-2">
      <button
        onClick={removeCartItemHandler}
        className=" absolute top-2 right-2  cursor-pointer "
      >
        <CancelIcon className="fill-slate-400 hover:fill-slate-800 duration-500" />
      </button>

      <Image
        className="m-2 h-40 w-32 rounded-md border object-cover object-center"
        src={item?.image}
        alt="checkout item"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="flex w-full flex-col px-4 py-4">
        <h1 className="text-gray-900 text-2xl font-tiltwrap mb-1">
          {item?.name}
        </h1>
        <span className="float-right text-md title-font text-gray-500 tracking-widest py-2">
          {item?.author}
        </span>

        <p className="inline-block w-fit bg-orange-500 text-sm rounded-lg font-tiltwrap p-1">{`-${item?.discount}%`}</p>
        <p className="text-2xl  font-bold py-2 ">
          {(item?.price - item?.price * (item?.discount / 100)).toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default HorizonBookCart;
