import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleAuthModal } from "@/store/features/reducers/authSlice";
import { isOpenAuthdModalSelector } from "@/store/selectors";

import Login from "./Login";
import Register from "./Register";
import UserBoard from "./UserBoard";
import Spinner from "../ui/loading/Spinner";
import { me } from "@/store/features/actions/auth.action";

function Authentication() {
  const dispatch = useDispatch();
  const isOpenAuthHandler = useSelector(isOpenAuthdModalSelector);
  const { currUser, loading, isLogedIn } = useSelector((state) => state.auth);

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (isOpenAuthHandler) {
      dispatch(me());
    }
  }, [isOpenAuthHandler]);
  const loginStatusHandler = () => {
    setIsLogin(!isLogin);
  };

  const openAuthModalHandler = () => {
    dispatch(toggleAuthModal());
  };

  return (
    <div className="w-full text-my-deep-ocean select-none">
      <div
        onClick={openAuthModalHandler}
        className={`fixed top-0 left-0 w-full h-full bg-slate-900 z-30 ${
          isOpenAuthHandler ? "opacity-70" : "opacity-0 invisible"
        } duration-500`}
      ></div>
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/4 sm:1/2 w-2/3 font-tiltwrap flex justify-center items-center z-50 ${
          isOpenAuthHandler ? "" : "translate-y-full"
        } duration-500`}
      >
        {loading ? (
          <Spinner />
        ) : (
          <div className="py-10 px-6 w-full rounded-md shadow-xl  bg-white">
            {isLogedIn ? (
              <UserBoard />
            ) : (
              <>
                {isLogin ? <Login /> : <Register />}
                <div>
                  <p className="mt-4 text-center">
                    <span
                      className="underline cursor-pointer text-sm"
                      onClick={loginStatusHandler}
                    >
                      {isLogin ? "Create An Account" : "Login"}
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Authentication;
