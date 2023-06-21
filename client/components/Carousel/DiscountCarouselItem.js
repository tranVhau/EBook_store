import React from "react";
import Image from "next/image";
import BookCard from "../product/BookCard";

function DiscountCarouselItem(props) {
  return (
    <div className="bg-blue-400 h-full rounded-md">
      {/* <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12"> */}
      <BookCard />
      {/* <Image
        alt="image not found"
        width="0"
        height="0"
        sizes="100vw"
        className="w-72 h-96 block rounded-md"
        src={props.image}
      /> */}
      {/* <span className="z-10 font-semibold px-4 py-2 shadow-2xl absolute bg-yellow-300 top-0 left-0 rounded-br-md rounded-tl-md">
            10% off
          </span> */}
      {/* </div> */}
      {/* <div className="col-span-4 text-xl">this is the name</div> */}
      {/* </div> */}
    </div>
  );
}

export default DiscountCarouselItem;
