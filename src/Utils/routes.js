const URL = 'https://localhost:7045';

module.exports = {
  login: `${URL}/api/Auth/login`,
  register: `${URL}/api/Auth/register`,
  currentUser: `${URL}/api/Auth/current/user`,
  userInfo: `${URL}/api/Information/all/info`
};
