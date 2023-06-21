import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import { removeItemFromCart } from "@/store/features/reducers/cartSlice";
import { removeFromCart } from "@/store/features/actions/cart.action";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.auth);

  const removeCartItemHandler = () => {
    if (currUser) {
      dispatch(removeFromCart({ user_id: currUser.data._id, item: item._id }));
    } else {
      dispatch(
        removeItemFromCart({
          _id: item._id,
          price: item.price,
          discount: item.discount,
        })
      );
    }
  };

  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
          <li className="flex py-6">
            <div className="h-36 w-28 overflow-hidden rounded-md border border-gray-200">
              <Image
                src={item.image}
                alt="cart item"
                width="0"
                height="0"
                sizes="100vw"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-lg font-medium text-gray-900">
                  <h3>
                    <p>{item.name}</p>
                  </h3>
                  <p className="ml-4">{item.price}</p>
                </div>
                <p className="mt-2 text-sm text-gray-500">{item.author}</p>
                <div className="mt-3">
                  <div className="inline-block font-tiltwrap text-xs bg-orange-500 p-1 rounded-md">
                    {`-${item.discount}%`}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex">
                  <button
                    onClick={removeCartItemHandler}
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
  );
}

export default CartItem;
