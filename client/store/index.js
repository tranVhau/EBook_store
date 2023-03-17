import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { cartSlice } from "./slices/cartSlice";
import { accountSlice } from "./slices/accountSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
      [accountSlice.name]: accountSlice.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
