import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { register } from "@/store/features/actions/auth.action";
import Spinner from "../ui/loading/Spinner";

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    try {
      dispatch(register(registerInfo));
    } catch (error) {}
  };

  return (
    <form onSubmit={registerSubmitHandler}>
      <div>
        <h1 className="text-4xl text-center mb-8 cursor-pointer text-my-deep-ocean">
          Register
        </h1>
      </div>
      <div className="space-y-6">
        <div className="relative">
          <input
            onChange={inputHandler}
            name="name"
            type="text"
            value={registerInfo.name}
            placeholder="full name"
            className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
          />
        </div>
        <div className="relative">
          <input
            onChange={inputHandler}
            name="email"
            type="text"
            value={registerInfo.email}
            placeholder="email@email.com"
            className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
          />
        </div>
        <div className="relative">
          <input
            onChange={inputHandler}
            name="password"
            type="password"
            value={registerInfo.password}
            placeholder="********"
            className="block text-sm py-3 px-3 rounded-2xl w-full border border-gray-400 font-tiltwrap"
          />
        </div>
      </div>
      <div className="relative text-center">
        <span className="text-xs text-red-400">{error?.message}</span>
      </div>
      <div className="text-center mt-4">
        <button
          disabled={loading}
          className="py-2 w-64 text-lg text-white bg-gray-800 border-2 border-gray-800 hover:bg-white hover:text-gray-800 duration-500 rounded-lg"
        >
          {loading ? (
            <>
              <Spinner style={"!h-4 !w-4 mx-2"} />
              Loading
            </>
          ) : (
            <>Register</>
          )}
        </button>
        <div className="relative">
          <div className="absolute inline px-2 bg-white -translate-y-3 -translate-x-3  ">
            or
          </div>
          <div className="w-full border-t border-gray-300 my-4"></div>
        </div>
      </div>
    </form>
  );
}

export default Register;
