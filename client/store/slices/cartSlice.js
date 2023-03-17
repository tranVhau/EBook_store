import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isOpen: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    toggleCart: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
