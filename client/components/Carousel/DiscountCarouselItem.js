import React from "react";

function DiscountCarouselItem(props) {
  return (
    <div>
      <img className="w-full block" src={props.image} />
      <span className="z-10 absolute bg-yellow-300 top-1 left-1">Content</span>
    </div>
  );
}

export default DiscountCarouselItem;
