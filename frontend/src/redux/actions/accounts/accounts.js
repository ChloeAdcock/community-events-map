import axios from 'axios';
import { LOGGED_IN, LOGIN_ERROR } from '../types';

export const login = (data) => (dispatch) => {
    return axios
        .post('http://127.0.0.1:8000/accounts/login', data)
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