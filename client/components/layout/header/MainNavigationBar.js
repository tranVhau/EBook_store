import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import SearchIcon from "@/public/svgs/search.svg";
import XIcon from "@/public/svgs/X.svg";
import MenuIcon from "@/public/svgs/menu-burger.svg";

import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "@/store/features/reducers/cartSlice";
import { addToCart, getCart } from "@/store/features/actions/cart.action";
import { toggleAuthModal } from "@/store/features/reducers/authSlice";
import filterAPIs from "@/services/api/filter.api";
import NavButtons from "./NavButtons";

function MainNavigationBar({ authors, genres }) {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.auth);
  const [isSearch, setSearchState] = useState(false);
  const [menuData, setMenuData] = useState({});
  const [isOpen, setIsOpen] = useState(false);
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
        dispatch(getCart(currUser._id));
      } else {
        dispatch(getCart(currUser._id));
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

  useEffect(() => {
    const fetchNaviMenu = async () => {
      const authors = await filterAPIs.getAuthors();
      const genres = await filterAPIs.getGenres();
      setMenuData({ authors: authors.data, genres: genres.data });
    };
    fetchNaviMenu();
  }, []);

  return (
    <header
      onClick={searchStateToFlase}
      className="bg-gradient-to-r from-my-deep-ocean to-my-deeper-ocean px-4 lg:px-6 py-2.5"
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl font-semibold ">
        <Logo />
        <div className="hidden md:block">
          <ul
            className={`p-3 text-my-soft-blue select-none  ${
              !isSearch ? "" : "hidden"
            } `}
          >
            <NavLinks
              isSearch={isSearch}
              menuData={menuData}
              toBottomHandler={toBottomHandler}
            />
          </ul>
        </div>

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
          <NavButtons
            cartButtonHandler={cartButtonHandler}
            userButtonHandler={userButtonHandler}
            searchStateHandler={searchStateHandler}
          />
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="block md:hidden"
        >
          {isOpen ? (
            <XIcon className="w-4 h-4 cursor-pointer fill-slate-400" />
          ) : (
            <MenuIcon className="w-4 h-4 cursor-pointer fill-slate-400" />
          )}
        </div>
      </div>
      <div
        className={`flex flex-col items-center basis-full w-full transition-transform font-tiltwrap space-y-8 text-slate-400 ${
          isOpen ? "" : "-translate-x-full"
        } duration-500`}
      >
        {isOpen && (
          <NavLinks
            isSearch={isSearch}
            menuData={menuData}
            toBottomHandler={toBottomHandler}
          />
        )}
      </div>
    </header>
  );
}

export default MainNavigationBar;
