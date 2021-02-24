import axios from 'axios';
import {
    LOGGED_IN,
    LOGIN_ERROR,
    USER_REGISTERED,
    REGISTER_ERROR,
    LOGGED_OUT,
    LOGOUT_ERROR
} from '../types';

export const login = (data) => (dispatch) => {
    return axios
        .post('http://127.0.0.1:8000/accounts/login/', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            dispatch({
                type: LOGGED_IN,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_ERROR,
                payload: err
            })
        })
}

export const register = (data) => (dispatch) => {
    console.log('Registering');
    return axios
        .post('http://127.0.0.1:8000/accounts/register/', data)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(res);
            dispatch({
                type: USER_REGISTERED,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: REGISTER_ERROR,
                payload: err
            })
        })
}

export const logout = () => (dispatch) => {
    try{
        localStorage.removeItem('token');
        dispatch({
            type: LOGGED_OUT
        })
    } catch (err) {
        dispatch({
            type: LOGOUT_ERROR,
            payload: err
        })
    }
}

