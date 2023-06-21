import { createAsyncThunk } from "@reduxjs/toolkit";
import authAPIs from "@/services/api/auth.api";

export const me = createAsyncThunk("auth/me", async () => {
  try {
    const response = await authAPIs.me();
    return response.data;
  } catch (error) {
    if (!error.response) {
      throw error;
    }
    return rejectWithValue(error.response.data);
  }
});

export const login = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const response = await authAPIs.login(user);
      if (response.data) {
        await localStorage.setItem("accessToken", response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (info, { rejectWithValue }) => {
    try {
      const response = await authAPIs.register(info);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (_, dispatch, { rejectWithValue }) => {
    try {
      const response = await authAPIs.refresh();
      if (response.data) {
        await localStorage.setItem("accessToken", response.data.accessToken);
      }
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAPIs.logout();
      await localStorage.removeItem("accessToken");
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
