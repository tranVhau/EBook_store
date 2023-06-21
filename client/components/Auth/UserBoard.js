import React from "react";
import LogoutIcon from "@/public/svgs/logout.svg";
import ModifyIcon from "@/public/svgs/modify.svg";

import { logout } from "@/store/features/actions/auth.action";

import { useSelector, useDispatch } from "react-redux";

function UserBoard() {
  const dispatch = useDispatch();
  const { currUser } = useSelector((state) => state.auth);

  const logoutHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
    } catch (error) {}
  };

  return (
    <form>
      <div>
        <h1 className="text-4xl text-center mb-8 cursor-pointer text-my-deep-ocean ">
          {`${currUser?.data.name || currUser?.data.email}'s Profile `}
        </h1>
      </div>
      <div>
        <div className="space-y-6">
          <div className="relative">
            <input
              name="email"
              type="text"
              placeholder="fullname"
              className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
            />
          </div>
          <div className="relative">
            <input
              name="email"
              type="text"
              placeholder="+0123. 456. 789"
              className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
            />
          </div>
          <div className="relative">
            <input
              name="email"
              type="text"
              placeholder="email@email.com"
              className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
            />
          </div>
          <div className="relative">
            <input
              name="password"
              type="password"
              className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
            />
          </div>

          {/* <div className="relative text-center">
            <span className="text-xs text-red-400">{error?.message}</span>
          </div> */}
        </div>
        <div className="flex justify-around text-center mt-4">
          <button className="group p-2 px-4 flex text-lg items-center text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg">
            <ModifyIcon
              className={"fill-white stroke-3 mx-2  group-hover:fill-slate-800"}
            />
            <p>Modify</p>
          </button>
          <button
            onClick={logoutHandler}
            className="group p-2 px-4 flex text-lg  items-center text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg"
          >
            <LogoutIcon
              className={"fill-white stroke-3 mx-2 group-hover:fill-slate-800"}
            />
            <p className="">Logout</p>
          </button>
        </div>
      </div>
    </form>
  );
}

export default UserBoard;
