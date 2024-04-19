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

  // ,
  // getLikedPostByUser: async (userId: number) => {
  //   return axiosPrivate.get(`post/user/${userId}/likes`);
  // }
  // ,
  // deletePost: async (postId: number) => {
  //   return axiosPrivate.delete(`post/${postId}`);
  // },
  // createPost: async (title: string, content: string, userId: number) => {
  //   return axiosPrivate.post(`post/user/${userId}`, {
  //     title,
  //     content,
  //   });
  // },
  // updatePost: async (postId: number, title: string, content: string) => {
  //   return axiosPrivate.put(`post/${postId}`, {
  //     title,
  //     content,
  //   });
  // }
  // ,
  // addComment: async (postId: number, userId: number, content: string) => {
  //   return axiosPrivate.post(`comment/${postId}/user/${userId}`, {
  //     content,
  //   });
  // },
  // getComments: async (postId: number) => {
  //   return axiosPrivate.get(`comment/${postId}`);
  // }
  // ,
  //  deleteComment: async (commentId: number) => {
  //   return axiosPrivate.delete(`comment/${commentId}`);
  // }
  // ,
  // likePost: async (postId: number, userId: number) => {
  //   return axiosPrivate.post(`post/${postId}/like/${userId}`);
  // },
  // unlikePost: async (postId: number, userId: number) => {
  //   return axiosPrivate.delete(`post/${postId}/unlike/${userId}`);
  // },
};
