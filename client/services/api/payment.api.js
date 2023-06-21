import axiosClient from "./axiosClient";

const paymentAPIs = {
  checkout: async (paymentDetails) => {
    const url = "/payment/new";
    return await axiosClient.post(url, paymentDetails);
  },
};

export default paymentAPIs;
