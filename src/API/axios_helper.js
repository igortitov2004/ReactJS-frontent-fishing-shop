import axios from 'axios';


export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token");
};

export const getRole = () => {
    return window.localStorage.getItem("role");
};

export const getUserName = () => {
    return window.localStorage.getItem("username");
};


export const setAuthHeader = (token,role,username) => {
    if (token !== null) {
        window.localStorage.setItem("role",role)
        window.localStorage.setItem("auth_token", token);
        window.localStorage.setItem("username",username)
    } else {
        window.localStorage.removeItem("role");
        window.localStorage.removeItem("auth_token");
        window.localStorage.removeItem("username")
    }
};

axios.defaults.baseURL = 'http://localhost:7777';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const request = (method, url, data) => {
    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = {'Authorization': `Bearer ${getAuthToken()}`};
    }

    return axios({
        method: method,
        url: url,
        headers: headers,
        data: data});
};