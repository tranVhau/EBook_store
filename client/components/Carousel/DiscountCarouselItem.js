import React from "react";
import Image from "next/image";
import BookCard from "../product/BookCard";
import Link from "next/link";

function DiscountCarouselItem({ ebook, key }) {
  return (
    <div className="h-1/2">
      <Image
        alt="image not found"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full block rounded-md"
        src={ebook.image}
      />
      <div className="text-my-deeper-ocean font-tiltwrap">
        <span className="absolute top-0 left-0 m-2 rounded-full bg-red-500 px-2 text-center text-sm font-medium text-white">
          {ebook.discount}% OFF
        </span>
        <Link
          href={`/eBooks/${ebook._id}`}
          className="z-20 absolute bottom-6 bg-my-deeper-ocean text-white px-14 rounded-full left-1/2 -translate-x-1/2 font-tiltwrap border-2 border-my-deeper-ocean  py-2 text-center cursor-pointer hover:text-gray-800 hover:border-2 hover:bg-white duration-500"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default DiscountCarouselItem;
