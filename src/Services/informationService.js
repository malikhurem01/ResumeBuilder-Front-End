import routes from '../Utils/routes';

const getAllUserInfo = token => {
  return axios.get(routes.userInfo, {
    headers: { Authorization: 'Bearer ' + token }
  });
};

const infoService = { getAllUserInfo };

export default infoService;
