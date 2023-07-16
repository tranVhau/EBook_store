import React from "react";
import Image from "next/image";
import BookCard from "../product/BookCard";

function DiscountCarouselItem(props) {
  return (
    <div className="h-1/2">
      <Image
        alt="image not found"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full block rounded-md"
        src={
          "https://res.cloudinary.com/dy9g317c9/image/upload/w_300,h_400,c_fill,b_auto,pg_1,c_pad/v1684340028/ebook_web/ebooks/qqeuk91pa1hebyvwaqhb.png"
        }
      />
      <div>
        <span className="z-20 absolute top-2">ABC</span>
      </div>
    </div>
  );
}

export default DiscountCarouselItem;
