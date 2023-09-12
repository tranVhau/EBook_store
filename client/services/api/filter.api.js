import axiosClient from "./axiosClient";

//fetch all filter options  (genres, authors)
const filterAPIs = {
  getAuthors: async () => {
    const url = "/authors";
    const response = await axiosClient.get(url);
    return response;
  },

  getGenres: async () => {
    const url = "/genres";
    const response = await axiosClient.get(url);
    return response;
  },
};

export default filterAPIs;
