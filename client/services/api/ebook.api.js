import axiosClient from "./axiosClient";

const ebookAPIs = {
  getEbooks: async (queries) => {
    const url = "/ebooks";
    const response = await axiosClient.get(url, {
      params: queries,
    });
    return response;
  },
  getEbook: async (id) => {
    const url = `/ebook/${id}`;
    const response = await axiosClient.get(url);
    return response;
  },
};

export default ebookAPIs;
