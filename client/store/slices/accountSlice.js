import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  isOpenModal: false,
};

export const accountSlice = createSlice({
  name: "account",
  initialState: initValue,
  reducers: {
    toggleAuthModal: (state, action) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export default accountSlice.reducer;
export const { toggleAuthModal } = accountSlice.actions;
