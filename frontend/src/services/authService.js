import axiosInstance from "../axios/axiosInstance";
// import jwtDecode from 'jwt-decode';
import { jwtDecode } from "jwt-decode";


const getToken = () => {
    const token = localStorage.getItem('token');

    if (token) {
        return token;
    }
    return null;
}

const getUserName = () => {
    const token = getToken()

    const payLoad = jwtDecode(token)
    return {
        firstName: payLoad.first_name,
        lastName: payLoad.last_name
    }
}

const setData = (data) => {
    localStorage.setItem('token', data.access);
    localStorage.setItem('refreshToken', data.refresh);
};

const setRefreshToken = (token) => {
    localStorage.setItem('token', token);
}


const login = async (userData) => {
    return await axiosInstance.post("token/", userData)
}

const refreshToken = () => {
    const token = localStorage.getItem('refreshToken')
    const bodyParameters = {
        'refresh': token
    }
    return axiosInstance.post("token/refresh/", bodyParameters)
}

const verifyToken = () => {
    const token = getToken();
    const bodyParameters = {
        'token': token
    }
    return axiosInstance.post("token/verify/", bodyParameters)
}

const LogOut = () => {
    const token = localStorage.getItem('refreshToken')
    const bodyParameters = {
        'token': token
    }
    return axiosInstance.post("token/logout/", bodyParameters)
}

// const getUserRole = () => {
//     const role = localStorage.getItem('role');
//     return role ? role : null
//     // if (r) {
//     //     const payLoad = jwtDecode(token);
//     //     return payLoad?.role;
//     // }
//     // return null;
// }

const isLoggedIn = () => {

    const token = getToken();
    if (token) {
        const payLoad = jwtDecode(token);
        const isLogin = Date.now() < payLoad.exp * 1000;
        if (!isLogin) {
            refreshToken()
                .then(res => {
                    setRefreshToken(res.data.access)
                    return true
                })
                .catch(err => {
                    return false
                })

        }

        return true
    }
}

const logOut = () => {
    LogOut()
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
}


export const authService = { logOut, getToken, setData, login, isLoggedIn, refreshToken, getUserName };