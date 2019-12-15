import Axios from "axios";
import { getCookie } from "../cookie";
import { ACCESS_TOCKEN } from "../constants";

export const signup = data => {
  return Axios.post(`${process.env.REACT_APP_API_URL}/register`, data);
};

export const fetchUsers = () => {
  return Axios.get(`${process.env.REACT_APP_API_URL}/users`);
};

export const login = data => {
  return Axios.post(`${process.env.REACT_APP_API_URL}/login`, data);
};
/** Should check with api access tocken is valid */
/** I check with cookis */
export const checkAuth = () =>
  new Promise((resolve, reject) => {
    if (getCookie(ACCESS_TOCKEN)) {
      resolve({ data: { isAuth: true } });
    } else {
      reject({ data: { isAuth: false } });
    }
  });

export const logout = () =>
  new Promise((resolve, reject) => {
    resolve({ data: { response: "success" } });
  });
