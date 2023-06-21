import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/images/3B00K_free-file.png";
import UserIcon from "@/public/svgs/user.svg";
import SearchIcon from "@/public/svgs/search.svg";
import CartIcon from "@/public/svgs/shopping-cart.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/features/reducers/cartSlice";
import { addToCart, getCart } from "@/store/features/actions/cart.action";
import { toggleAuthModal } from "@/store/features/reducers/authSlice";

function MainNavigationBar() {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.auth);
  const [isSearch, setSearchState] = useState(false);
  const router = useRouter();

  // open cart handler
  const cartButtonHandler = () => {
    dispatch(toggleCart());
    //merge item(pre-login and login),
    if (currUser) {
      // dispatch(getCart(currUser.data._id));
      if (cartItems) {
        //get the list of id and add to user's Cart
        const itemArr = cartItems.map((item) => item._id);
        dispatch(addToCart({ user_id: currUser.data._id, items: itemArr }));
        dispatch(getCart(currUser.data._id));
      } else {
        dispatch(getCart(currUser.data._id));
      }
    }
  };

  const userButtonHandler = () => {
    dispatch(toggleAuthModal());
  };

  const searchStateHandler = () => {
    setSearchState(!isSearch);
  };
  const searchStateToFlase = () => {
    if (isSearch) setSearchState(!isSearch);
  };

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      router.push({
        pathname: "/eBooks",
        query: { keyword: e.target.value },
      });
      e.target.value = "";
    }
  };

  const toBottomHandler = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const toLastestHandler = () => {
    // lastesPos.current.scrollIntoView();
  };

  return (
    <header
      onClick={searchStateToFlase}
      className="bg-gradient-to-r from-my-deep-ocean to-my-deeper-ocean px-4 lg:px-6 py-2.5"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-semibold ">
        <Link href="/" className="flex items-center">
          <Image src={logo} className="mr-2 h-20 w-full sm:h-9" alt="Logo" />
        </Link>

        <ul
          className={`p-3 text-my-soft-blue select-none  ${
            !isSearch ? "" : "hidden"
          } `}
        >
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
            Ebooks
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
            onClick={toLastestHandler}
          >
            Lastest
          </li>

          <li
            className=" group px-5 mx-1 inline-block
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
            Genres
            <ul className="absolute w-max hidden font-tiltwrap text-md text-my-deep-ocean  pt-6 group-hover:block ">
              <li className="">
                <p className="rounded-t bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap">
                  One
                </p>
              </li>
              <li className="">
                <p className="bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap">
                  Two
                </p>
              </li>
              <li className="">
                <p className="rounded-b bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap">
                  Three is the magic number
                </p>
              </li>
            </ul>
          </li>

          <li
            className="group px-5 mx-1 inline-block
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
            <ul className="absolute w-max hidden font-tiltwrap text-md text-my-deep-ocean  pt-6 group-hover:block ">
              <li className="">
                <p className="rounded-t bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap">
                  One
                </p>
              </li>
              <li className="">
                <p className="bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap">
                  Two
                </p>
              </li>
              <li className="">
                <p className="rounded-b bg-slate-200  hover:bg-my-soft-blue py-2 px-4 block whitespace-no-wrap">
                  Three is the magic number
                </p>
              </li>
            </ul>
          </li>
          <li
            className="px-5 mx-1 inline-block
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
            onClick={toBottomHandler}
          >
            About Us
          </li>
        </ul>
        <div
          className={`p-1 relative w-1/3 font-normal ${
            isSearch ? "" : "hidden"
          } `}
        >
          <div className=" absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <SearchIcon className="" />
          </div>
          <input
            onKeyDown={searchHandler}
            onClick={(e) => {
              e.stopPropagation();
            }}
            type="text"
            className="px-3 bg-gray-50 w-full text-gray-900 text-base font-tiltwrap rounded-full pl-10 p-2  "
            placeholder="Search"
          />
        </div>

        <div>
          <button onClick={searchStateHandler} className="mx-5">
            <SearchIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
          </button>
          <button onClick={userButtonHandler} className="mx-5">
            <UserIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
          </button>
          <button onClick={cartButtonHandler} className="mx-5">
            <CartIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default MainNavigationBar;
