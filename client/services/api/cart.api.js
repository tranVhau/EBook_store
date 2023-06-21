import axiosClient from "./axiosClient";

const cartAPIs = {
  getCart: async (id) => {
    const url = `/cart/${id}`;
    const response = await axiosClient.get(url);
    return response.data;
  },

  addToCart: async (info) => {
    const url = "/cart/add";
    const response = await axiosClient.post(url, info);
    return response.data;
  },

  removeFromCart: async (info) => {
    const url = "/cart/remove";
    const response = await axiosClient.put(url, info);
    return response.data;
  },

  dropCart: async (id) => {
    const url = `/cart/drop/${id}`;
    const response = await axiosClient.delete(url.info);
    return response.data;
  },
};

export default cartAPIs;
