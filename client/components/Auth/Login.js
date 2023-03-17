import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal } from "@/store/slices/accountSlice";
import { isOpenAuthdModalSelector } from "@/store/selectors";

function Login() {
  const dispatch = useDispatch();
  const isOpenAuthHandler = useSelector(isOpenAuthdModalSelector);

  const openAuthModalHandler = () => {
    dispatch(toggleAuthModal());
  };

  return (
    <div className="w-full">
      <div
        onClick={openAuthModalHandler}
        className={`fixed top-0 left-0 w-full h-full bg-slate-900 z-30 ${
          isOpenAuthHandler ? "opacity-70" : "opacity-0 invisible"
        } duration-500`}
      ></div>
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4 font-tiltwrap min-h-screen flex justify-center items-center z-50 ${
          isOpenAuthHandler ? "" : "translate-y-full"
        } duration-500`}
      >
        <div className="py-10 px-6 w-full rounded-md shadow-xl  bg-white">
          <div>
            <h1 className="text-4xl text-center mb-8 cursor-pointer text-my-deep-ocean ">
              Login
            </h1>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="email@email.com"
                className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="********"
                className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
              />
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="py-2 w-64 text-lg text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg">
              Login
            </button>
            <div className="relative">
              <div className="absolute inline px-2 bg-white -translate-y-3 -translate-x-3  ">
                or
              </div>
              <div className="w-full border-t border-gray-300 my-4"></div>
            </div>
            <button className="py-2 w-64 text-lg text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg">
              Google
            </button>
            <p className="mt-4 text-sm">
              Already Have An Account?{" "}
              <span className="underline cursor-pointer"> Sign In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
