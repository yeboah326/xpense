import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const register = (username, email, password) => {
  return axios.post(API_URL + "/user/register", { username, email, password });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "/user/login", { username, password })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => JSON.parse(localStorage.getItem("user"));

const isAuthenticated = () => (localStorage.getItem("user") ? true : false);

const getToken = () => JSON.parse(localStorage.getItem("user")).token;

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  isAuthenticated,
  getToken,
};

export default AuthService;
