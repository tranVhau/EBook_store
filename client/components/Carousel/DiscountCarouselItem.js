import React from "react";

function DiscountCarouselItem(props) {
  return (
    <div className="bg-blue-400 w-full h-full rounded-md">
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-8">
          <img className="w-full block rounded-md" src={props.image} />
          <span className="z-10 font-semibold px-4 py-2 shadow-2xl absolute bg-yellow-300 top-0 left-0 rounded-br-md rounded-tl-md">
            10% off
          </span>
        </div>
        <div className="col-span-4 text-xl">this is the name</div>
      </div>
    </div>
  );
}

export default DiscountCarouselItem;
