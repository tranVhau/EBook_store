import React from "react";
import CancelIcon from "@/public/svgs/cancel.svg";

function HorizonBookCart() {
  return (
    <div className="relative flex flex-col rounded-lg bg-white sm:flex-row m-2">
      <div className=" absolute top-2 right-2  cursor-pointer ">
        <CancelIcon className="fill-slate-400 hover:fill-slate-800 duration-500" />
      </div>

      <img
        className="m-2 h-40 w-32 rounded-md border object-cover object-center"
        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="checkout item"
      />
      <div class="flex w-full flex-col px-4 py-4">
        <h1 class="text-gray-900 text-2xl font-tiltwrap mb-1">eBook Name</h1>
        <span class="float-right text-md title-font text-gray-500 tracking-widest py-2">
          by Author
        </span>
        <p class="text-2xl font-bold py-2 ">$138.99</p>
      </div>
    </div>
  );
}

export default HorizonBookCart;
