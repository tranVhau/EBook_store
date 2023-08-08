import axiosClient from "./axiosClient";

const authAPIs = {
  me: async () => {
    try {
      const url = "http://localhost:8080/api/client/me";
      const response = await axiosClient.get(url, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (user) => {
    try {
      const url = "http://localhost:8080/api/client/login";
      const response = await axiosClient.post(url, user, {
        withCredentials: true,
      });
      return response.data; // Assuming the server returns the relevant data in the response body
    } catch (error) {
      throw error;
    }
  },

  register: async (info) => {
    try {
      const url = "/register";
      return await axiosClient.post(url, info);
    } catch (error) {
      throw error;
    }
  },
  logout: async () => {
    try {
      const url = "http://localhost:8080/api/client/logout";
      return await axiosClient.post(url, null, { withCredentials: true });
    } catch (error) {
      throw error;
    }
  },
  refresh: async () => {
    try {
      const url = "http://localhost:8080/api/client/refresh";
      return await axiosClient.post(url, null, { withCredentials: true });
    } catch (error) {
      throw error;
    }
  },
};

export default authAPIs;
