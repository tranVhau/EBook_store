import axiosClient from "./axiosClient";

const authAPIs = {
  me: async () => {
    const url = "/me";
    const response = await axiosClient.get(url);
    return response;
  },

  login: async (user) => {
    const url = "/login";
    const response = axiosClient.post(url, user, { withCredentials: true });
    return response;
  },
  register: async (info) => {
    const url = "/register";
    return await axiosClient.post(url, info);
  },
  logout: async () => {
    const url = "/logout";
    return await axiosClient.post(
      url,
      {},
      {
        withCredentials: true,
      }
    );
  },
  refresh: async () => {
    const url = "/refresh";
    return await axiosClient.post(url, {
      withCredentials: true,
    });
  },
};

export default authAPIs;
