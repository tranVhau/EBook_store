import React from "react";
import UserIcon from "@/public/svgs/user.svg";
import SearchIcon from "@/public/svgs/search.svg";
import CartIcon from "@/public/svgs/shopping-cart.svg";

function NavButtons({
  searchStateHandler,
  userButtonHandler,
  cartButtonHandler,
}) {
  return (
    <>
      <button onClick={searchStateHandler} className="mx-5 py-3">
        <SearchIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
      </button>
      <button onClick={userButtonHandler} className="mx-5 py-3">
        <UserIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
      </button>
      <button onClick={cartButtonHandler} className="mx-5 py-3">
        <CartIcon className="fill-slate-400 hover:fill-orange-400 ease-in-out duration-300" />
      </button>
    </>
  );
}

export default NavButtons;
