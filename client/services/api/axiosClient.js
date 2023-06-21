import axios from "axios";
import store from "@/store";
import { refresh } from "@/store/features/actions/auth.action";
// import { refresh } from "@/store/features/actions/auth.action";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 10000,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    if (typeof window != "undefined") {
      const accessToken = localStorage.getItem("localStorage");
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    if (error.response) {
      if (error.response.status == 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        await store.dispatch(refresh());
      }
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
export default axiosClient;
