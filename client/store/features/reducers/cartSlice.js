import { createSlice } from "@reduxjs/toolkit";
import Notifies from "@/utils/notify.utils";

import {
  getCart,
  addToCart,
  dropCart,
  removeFromCart,
} from "../actions/cart.action";

const initState = {
  isOpen: false,
  loading: false,
  cartItems: [],
  total: 0,
  totalDiscount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    toggleCart: (state, action) => {
      state.isOpen = !state.isOpen;
      const subTotal = state.cartItems.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );

      const discount = state.cartItems.reduce(
        (accumulator, currentValue) =>
          accumulator + (currentValue.price * currentValue.discount) / 100,
        0
      );
      state.totalDiscount = discount;
      state.total = subTotal;
    },
    addItemToCart: (state, action) => {
      if (!state.cartItems[0]) {
        state.cartItems = [];
      }
      const isExist = state.cartItems.some(
        (item) => item._id === action.payload._id
      );
      if (!isExist) {
        state.cartItems.push(action.payload);
      }
      const addPrice = state.total + action.payload.price;
      const addDiscount =
        state.totalDiscount +
        (action.payload.price * action.payload.discount) / 100;
      state.total = Number(addPrice);
      state.totalDiscount = Number(addDiscount);

      Notifies.success("✨ New item added", 1000, "top-right");
    },

    removeItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      const subPrice = state.total - action.payload.price;
      const subDiscount =
        state.totalDiscount -
        (action.payload.price * action.payload.discount) / 100;
      state.total = Number(subPrice);
      state.totalDiscount = Number(subDiscount);
    },

    dropItemCart: (state, action) => {
      state.cartItems = [];
      state.total = 0;
      state.totalDiscount = 0;
    },
  },
  extraReducers: (builder) => {
    //get
    builder.addCase(getCart.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.items;
      state.loading = false;
      state.total = action.payload.subtotal;
      state.totalDiscount = action.payload.totalDiscount;
    });
    // add
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.items;
      state.total = action.payload.subtotal;
      state.totalDiscount = action.payload.totalDiscount;
      Notifies.success("✨ New item added", 1000, "top-right");
    });
    //remove
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cartItems = action.payload.items;
      state.total = action.payload.subtotal;
      state.totalDiscount = action.payload.totalDiscount;
    });
    //drop
    builder.addCase(dropCart.fulfilled, (state, action) => {
      state.cartItems = [];
      state.total = 0;
      state.totalDiscount = 0;
    });
  },
});

export const { toggleCart, addItemToCart, removeItemFromCart, dropItemCart } =
  cartSlice.actions;
export default cartSlice.reducer;
