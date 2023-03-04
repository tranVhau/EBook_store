import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/images/3B00K_free-file.png";
import UserIcon from "../../../public/svgs/user.svg";
import SearchIcon from "../../../public/svgs/search.svg";
import CartIcon from "../../../public/svgs/shopping-cart.svg";

function MainNaviagtionBar() {
  return (
    <header className="bg-gradient-to-r from-my-deep-ocean to-my-deeper-ocean px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-semibold ">
        <Link href="/" class="flex items-center">
          <Image src={logo} className="mr-2 h-20 w-full sm:h-9" alt="Logo" />
        </Link>
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

        <div>
          <button href="#" className="mx-5">
            <SearchIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
          </button>
          <button href="#" className="mx-5">
            <UserIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
          </button>
          <button href="#" className="mx-5">
            <CartIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNaviagtionBar;
