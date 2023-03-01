import React from "react";

function MainNaviagtionBar() {
  return (
    <div className=" px-6 flex justify-between items-center font-semibold bg-my-deep-ocean hover:bg-my-deeper-ocean ease-in-out duration-300 ">
      <div className="py-5 ">LOGO</div>
      <ul className="p-3 text-my-soft-blue ">
        <li
          className=" px-5 mx-1 inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                before:bg-blue-500
                hover:before:w-16
                hover:text-cyan-50"
        >
          Home
        </li>
        <li
          className=" px-5 mx-1 inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                 before:bg-blue-500
                hover:before:w-16
                hover:text-cyan-50"
        >
          Products
        </li>
        <li
          className=" px-5 mx-1 inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                 before:bg-blue-500
                hover:before:w-16
                hover:text-cyan-50"
        >
          Popular
        </li>
        <li
          className=" px-5 mx-1 inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                 before:bg-blue-500
                hover:before:w-16
                hover:text-cyan-50"
        >
          Categories
        </li>
        <li
          className=" px-5 mx-1 inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                 before:bg-blue-500
                hover:before:w-16
                hover:text-cyan-50"
        >
          Authors
        </li>
        <li
          className=" px-5 mx-1 inline-block
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-0.5
                before:transition-all
                before:duration-500
                 before:bg-blue-500
                hover:before:w-16
                hover:text-cyan-50"
        >
          About Us
        </li>
      </ul>
      <div className="p-3">
        <button className="px-2 mx-1 cursor-pointer">Button 1</button>
      </div>
    </div>
  );
}

export default MainNaviagtionBar;
