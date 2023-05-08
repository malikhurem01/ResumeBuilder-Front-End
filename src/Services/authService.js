import axios from "axios";

import routes from "../Utils/routes";

const login = ({email, password}) => {
    return axios.post(routes.login, {
        email,
        password
    });
}

const register = ({firstName, lastName, email, password}) => {
    return axios.post(routes.register, {
        firstName,
        lastName,
        email,
        password
    });
}

const services = {
    login,
    register
}

export default services;