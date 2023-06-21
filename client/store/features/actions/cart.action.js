import cartAPIs from "@/services/api/cart.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCart = createAsyncThunk(
  "cart/get",
  async (userID, { rejectWithValue }) => {
    try {
      const response = await cartAPIs.getCart(userID);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const addToCart = createAsyncThunk(
  "cart/add",
  async (items, { rejectWithValue }) => {
    try {
      const response = await cartAPIs.addToCart(items);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (item, { rejectWithValue }) => {
    try {
      const response = await cartAPIs.removeFromCart(item);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const dropCart = createAsyncThunk(
  "cart/drop",
  async (userID, { rejectWithValue }) => {
    try {
      const response = await cartAPIs.dropCart(userID);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);
