import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { login } from "@/store/features/actions/auth.action";
import Spinner from "../ui/loading/Spinner";

import axios from "axios";

function Login() {
  const dispatch = useDispatch();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const { loading, currUser, error } = useSelector((state) => state.auth);
  // handle login in action
  const loginInputHandler = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(login(loginInfo));
    } catch (error) {}
  };

  return (
    <form onSubmit={loginSubmitHandler}>
      <div>
        <h1 className="text-4xl text-center mb-8 cursor-pointer text-my-deep-ocean ">
          Login
        </h1>
      </div>
      <div>
        <div className="space-y-6">
          <div className="relative">
            <input
              onChange={loginInputHandler}
              name="email"
              value={loginInfo.email}
              type="text"
              placeholder="email@email.com"
              className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap bg-slate-50 "
            />
          </div>
          <div className="relative">
            <input
              onChange={loginInputHandler}
              name="password"
              value={loginInfo.password}
              type="password"
              placeholder="********"
              className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap bg-slate-50 "
            />
          </div>

          <div className="relative text-center">
            <span className="text-xs text-red-400">{error?.message}</span>
          </div>
        </div>
        <div className="text-center mt-4">
          <button
            disabled={loading}
            className="py-2 w-full text-lg text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg"
          >
            {loading ? (
              <>
                <Spinner style={"!h-4 !w-4 mx-2"} />
                Loading. . .
              </>
            ) : (
              <>Login</>
            )}
          </button>
          <div className="relative">
            <div className="absolute inline px-2 bg-white -translate-y-3 -translate-x-3  ">
              or
            </div>
            <div className="w-full border-t border-gray-300 my-4"></div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
