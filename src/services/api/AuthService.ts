import { axiosPublic } from "./axiosPublic.ts";

export const AuthService = {
  register: async (name: string, email: string, password: string) => {
    return axiosPublic.post("register", {
      name,
      email,
      password,
    });
  },
  login: async (email: string, password: string) => {
    return axiosPublic.post("authenticate", {
      email,
      password,
    });
  },
};
