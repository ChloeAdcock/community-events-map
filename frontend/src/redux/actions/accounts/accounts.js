import axios from 'axios';
import {
    LOGGED_IN,
    LOGIN_ERROR,
    USER_REGISTERED,
    REGISTER_ERROR,
    LOGGED_OUT,
    LOGOUT_ERROR,
    USER_AUTHENTICATED,
    USER_ERROR
} from '../types';

export const login = (data) => async (dispatch) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/accounts/login/', data);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: LOGGED_IN,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_ERROR,
            payload: err
        })
    }
}

export const register = (data) => async (dispatch) => {
    try {
        const res = await axios.post('http://127.0.0.1:8000/accounts/register/', data);
        localStorage.setItem('token', res.data.token);
        dispatch({
            type: USER_REGISTERED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: REGISTER_ERROR,
            payload: err
        })
    }
}

export const logout = () => (dispatch) => {
    try {
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

export const currentUser = () => async (dispatch) => {
    try {
        const res = await axios.get('http://127.0.0.1:8000/accounts/current_user/', {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        });
        dispatch({
            type: USER_AUTHENTICATED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err
        })
    }
}

