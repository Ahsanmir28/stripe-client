import axios from "axios";

const usersUrl = "http://localhost:8080/users";

// axios.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

// export function setToken(token) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// }
export const getStripeCoupons = async (coupons) => {
  return await axios.get(`${usersUrl}/get-stripe-coupons`, coupons);
};

export const createStripeCoupons = async (coupon) => {
  return await axios.post(`${usersUrl}/create-stripe-coupons`, coupon);
};
export const deleteStripeCoupons = async (id) => {
  return await axios.delete(`${usersUrl}/delete/${id}`);
};
export const signIn = async (formData) => {
  return await axios.post(`${usersUrl}/signin`, formData);
};
export const signUp = async (formData) => {
  return await axios.post(`${usersUrl}/signup`, formData);
};
