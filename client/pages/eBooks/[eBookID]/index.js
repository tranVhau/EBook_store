import React, { useState } from "react";
import PDFSection from "@/components/product/PDFSection";
import DiscountIcon from "@/public/svgs/discount.svg";
import moment from "moment";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "@/store/features/reducers/cartSlice";
import { addToCart } from "@/store/features/actions/cart.action";

import ebookAPIs from "@/services/api/ebook.api";

export const getStaticProps = async (context) => {
  const response = await ebookAPIs.getEbook(context.params.eBookID);
  const ebook = response.data.ebook;
  return { props: { ebook: ebook } };
};

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

function EBookDetail({ ebook }) {
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
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-6 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full h-screen overflow-y-auto overflow-x-hidden object-center rounded border ">
            <PDFSection url={ebook?.source} />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {ebook?.author}
            </h2>
            <h1 className="text-gray-900 text-3xl font-tiltwrap mb-1">
              {ebook?.name}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest pb-2">
              {moment(ebook?.created_at).format("MMMM/DD/YYYY")}
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <DiscountIcon className="w-6 h-6 fill-orange-600" />
                <span className="text-gray-600 ml-1 font-tiltwrap text-xl">
                  {ebook?.discount}%
                </span>
              </span>
            </div>
            <p className="leading-relaxed">{ebook?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className=" font-tiltwrap text-2xl text-gray-900">
                <span className=" text-my-deeper-ocean mr-4">Price:</span>
                <span className="line-through text-gray-500 text-base mx-2">
                  {ebook.price}
                </span>
                {` $${(
                  ebook?.price -
                  (ebook?.price * ebook?.discount) / 100
                ).toFixed(2)}`}
              </span>
              <button
                onClick={addToCartHandler}
                className="flex ml-auto font-tiltwrap border-gray-800 border-2 text-white bg-gray-800 py-2 px-6 focus:outline-none hover:bg-white hover:text-gray-800 ease-out duration-500 rounded"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export function getStaticPaths() {
//   return {
//     paths: [{ params: { eBookSlug: "1" } }, { params: { eBookSlug: "2" } }],
//     fallback: false,
//   };
// }

export default EBookDetail;
