import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "@/store/features/reducers/cartSlice";

import Image from "next/image";
import Link from "next/link";

import { addToCart } from "@/store/features/actions/cart.action";

function BookCard({ ebook }) {
  const { currUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (currUser) {
      // already loged-in
      dispatch(addToCart({ user_id: currUser.data._id, items: [ebook._id] }));
    } else {
      const item = {
        _id: ebook._id,
        name: ebook.name,
        image: ebook.image,
        price: ebook.price,
        author: ebook.author,
        discount: ebook.discount,
      };
      dispatch(addItemToCart(item));
    }
  };

  return (
    <div className="flex w-72 z-10 items-center justify-center ">
      <div className=" border border-gray-300 group rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:bg-white transform duration-500 cursor-pointer">
        <div>
          {ebook?.discount !== 0 ? (
            <span className="bg-orange-500 py-2 px-4 text-sm font-semibold text-white rounded-br-md rounded-tl-md cursor-pointer">
              {`-${ebook?.discount}%`}
            </span>
          ) : (
            <span className="py-2 px-4"></span>
          )}
          <Link
            href={`/eBooks/${ebook?._id}`}
            className="block truncate mt-1 py-1 px-4 text-xl text-gray-700 font-tiltwrap hover:underline cursor-pointer"
          >
            {ebook?.name}
          </Link>
          <div className="flex justify-end">
            <h2 className="px-4 mr-auto font-extralight text-md text-gray-500">
              {ebook?.author}
            </h2>
            <h2 className="text-lg text-gray-700 font-semibold px-4">
              <span className="text-xs text-gray-600 line-through">
                {ebook?.discount !== 0 ? ebook?.price : ""}
              </span>
              <span className="ml-2">
                $
                {(
                  ebook?.price -
                  (ebook?.price * ebook?.discount) / 100
                ).toFixed(2)}
              </span>
            </h2>
          </div>
          <div className="px-4 py-2">
            {ebook?.genres.map((genre) => (
              <span
                key={genre}
                className="bg-orange-300 rounded-lg p-1 font-bold text-xs font-tiltwrap text-my-deep-ocean mr-1"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
        <div className="relative">
          {ebook?.image && (
            <Image
              alt="item image"
              className="w-72 h-96"
              width="0"
              height="0"
              sizes="100vw"
              src={ebook?.image}
            />
          )}
          <div className="hidden group-hover:block ">
            <button
              onClick={addToCartHandler}
              className=" absolute font-tiltwrap border-2 border-gray-800 bottom-2 right-1/2 transform translate-x-1/2 bg-slate-800 text-white py-2 text-center px-6 w-48 rounded-md cursor-pointer hover:text-gray-800 hover:border-2 hover:bg-white duration-500"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
