import React, { useState } from "react";
import PDFSection from "@/components/product/PDFSection";

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
              29/4/2023
            </h2>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-red-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{ebook?.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                <span className="opacity-80 text-my-deeper-ocean font-bold">
                  Price:
                </span>
                {` $${ebook?.price}`}
              </span>
              <button className="flex ml-auto font-tiltwrap border-gray-800 border-2 text-white bg-gray-800 py-2 px-6 focus:outline-none hover:bg-white hover:text-gray-800 ease-out duration-500 rounded">
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
