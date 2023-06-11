import axios from 'axios';

import routes from '../Utils/routes';

const login = ({ email, password }) => {
  return axios.post(routes.login, {
    email,
    password
  });
};

const register = ({ firstName, lastName, email, password }) => {
  return axios.post(routes.register, {
    firstName,
    lastName,
    email,
    password
  });
};

const currentUser = token => {
  return axios.get(routes.currentUser, {
    headers: { Authorization: 'Bearer ' + token }
  });
};

const logOut = () => {
  localStorage.removeItem('user_jwt');
  window.location.replace('/login');
};

const isAuthenticated = () => {
  return Boolean(JSON.parse(localStorage.getItem('user_jwt')));
};

const getToken = () => {
  if (isAuthenticated()) {
    return JSON.parse(localStorage.getItem('user_jwt'));
  }
  return null;
};

const services = {
  login,
  register,
  currentUser,
  logOut,
  isAuthenticated,
  getToken
};

export default services;
