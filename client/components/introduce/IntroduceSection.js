import React from "react";
import Image from "next/image";

import RightArrowIcon from "../../public/svgs/arrow-small-right.svg";

function IntroduceSection({ scrollToDiscountHandler }) {
  return (
    <div className=" bg-gradient-to-r from-my-deep-ocean to-my-deeper-ocean ">
      <div className="relative grid grid-cols-12 h-[92vh]">
        <div className="col-span-1"></div>
        <div className="sm:col-span-7 col-span-full font-tiltwrap text-5xl text-gray-100 leading-tight self-center">
          <span> Buy Your Favourite eBooks </span>
          <br />
          <span>With Special Discounts.</span>
          <div className="my-10 translate-x-5">
            <ul className="text-lg font-sans list-disc text-my-soft-blue">
              <li>Easy Payment with Paypal </li>
              <li>Provide a variety of ebooks</li>
              <li>Save Money Weekly With Special Discounts </li>
            </ul>
          </div>
          <span className="block  text-center pt-12">
            <button
              onClick={scrollToDiscountHandler}
              className=" bg-orange-600 p-2 rounded-md text-xl hover:bg-orange-700 ease-linear duration-200 text-white"
            >
              Get Started <RightArrowIcon className="inline fill-slate-100" />
            </button>
          </span>
        </div>

        <div className="sm:col-span-3 sm:block hidden self-end ">
          <Image
            alt="banner image"
            className="w-full object-cover rounded-t-md h-[80vh] "
            width="0"
            height="0"
            sizes="100vw"
            src="https://res.cloudinary.com/dy9g317c9/image/upload/v1677773448/ebook_web/images/ebook-banner_suxwlf.webp"
          />
        </div>
        {/* <div className="absolute bottom-2 left-0 right-0 cursor-pointer">
          <DropDownIcon className="fill-slate-300 w-36" />
        </div> */}
      </div>
    </div>
  );
}

export default IntroduceSection;
