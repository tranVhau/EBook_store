import React, { useState } from "react";
import Notifies from "@/utils/notify.utils";
import LogoutIcon from "@/public/svgs/logout.svg";
import ModifyIcon from "@/public/svgs/modify.svg";

import { logout } from "@/store/features/actions/auth.action";

import { useSelector, useDispatch } from "react-redux";

function UserBoard() {
  const dispatch = useDispatch();
  const [lastClickTime, setLastClickTime] = useState(0);
  const { currUser } = useSelector((state) => state.auth);

  const logoutHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
    } catch (error) {}
  };

  const onchangePassword = (e) => {
    e.preventDefault();
    const currentTime = Date.now();
    if (currentTime - lastClickTime >= 60 * 1000) {
      // Execute your click logic here
      e.preventDefault();
      setIsSendEmail(true);
      Notifies.success(`An email has been sent to ${currUser.email}`);
      setLastClickTime(currentTime);
    }
  };

  return (
    <form>
      <div>
        <h1 className="text-4xl text-center mb-8 cursor-pointer text-my-deep-ocean ">
          {`${currUser?.name || currUser?.email}'s Profile `}
        </h1>
      </div>
      <div>
        <div className="space-y-6">
          <div className="relative">
            <input
              name="name"
              type="text"
              placeholder={currUser?.name || "fullname"}
              className="block text-sm py-3 px-3 rounded-2xl w-full border bg-white border-gray-400 font-tiltwrap"
            />
          </div>
          <div className="relative">
            <input
              name="email"
              type="text"
              placeholder={currUser?.email || "email"}
              className="block text-sm py-3 px-3 rounded-2xl w-full border bg-white border-gray-400 font-tiltwrap"
            />
          </div>
          <div className="relative">
            <input
              name="phone"
              type="text"
              placeholder={currUser?.phone || "phone number"}
              className="block text-sm py-3 px-3 rounded-2xl w-full border bg-white border-gray-400 font-tiltwrap"
            />
          </div>

          {/* <div className="relative text-center">
            <span className="text-xs text-red-400">{error?.message}</span>
          </div> */}
        </div>
        <div className="flex justify-around text-center mt-4">
          {/* <button className="group p-2 px-4 flex text-lg items-center text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg">
            <ModifyIcon
              className={"fill-white stroke-3 mx-2  group-hover:fill-slate-800"}
            />
            <p>Save</p>
          </button> */}
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
