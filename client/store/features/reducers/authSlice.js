import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Notifies from "@/utils/notify.utils";
import { login, register, me, refresh, logout } from "../actions/auth.action";

const initValue = {
  isOpenModal: false,
  currUser: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initValue,
  reducers: {
    toggleAuthModal: (state, action) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.currUser = action.payload;
      state.isOpenModal = false;
      Notifies.success(
        `welcome back:  ${
          action.payload.data?.name || action.payload.data?.email
        }🫡`,
        undefined,
        undefined
      );
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.currUser = null;
      state.error = action.payload;
    });
    // register
    builder.addCase(register.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      Notifies.success(`Nice👍, It's time for login `, undefined, undefined);
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    // logout
    builder.addCase(logout.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.loading = false;
      state.currUser = null;
      state.isOpenModal = false;
      Notifies.success("See you soon 😭", undefined, undefined);
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      Notifies.error(`${action.payload.message} 🤨`);
    });

    // builder.addCase(me.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(me.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.currUser = action.payload;
    // });
  },
});

export const { toggleAuthModal, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
