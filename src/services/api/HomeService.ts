import axios from "axios";
import { axiosPrivate } from "./axiosPrivate.ts";

export const HomeService = {
  getUserById: async (userId: number) => {
    return axiosPrivate.get(`user/${userId}`);
  },

  getPosts: async () => {
    return axiosPrivate.get("post");
  },
  getProductsByUserId: async (userId: number) => {
    return axiosPrivate.get(`use/private/product/${userId}/user`);
  },
  getProductById: async (productId: number) => {
    return axiosPrivate.get(`use/public/product/${productId}`);
  },
  getAllProducts: async () => {
    return axiosPrivate.get("use/public/product/all");
  },
  addProduct: async (userId: number, data: FormData) => {
    return axios.post(`use/private/product/${userId}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  deleteProduct: async (productId: number) => {
    return axiosPrivate.delete(`use/private/product/${productId}`);
  },
};
