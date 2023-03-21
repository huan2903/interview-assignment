import axios from "axios";

// export const baseApi = axios.create({
//   baseURL: `https://randomuser.me/api/`,
//   withCredentials: false,
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//   },
// });

export const getUser = async (page: Number, result: Number) => {
  return await axios.get(`https://randomuser.me/api/?page=${page}&results=${result}`);
};
