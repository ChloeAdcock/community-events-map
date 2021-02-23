import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/accounts/accounts';

function RegisterForm() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const errorState = useSelector(state => state.accounts.error);
    const user = useSelector(state => state.accounts.currentUser);

    const passwordsMatch = () => {
        if (password === confirmPassword) {
            return true
        } else {
            return false
        }
    }

    const validPassword = () => {

    }

    const validUsername = () => {

    }

    const isValid = () => {
        if (passwordsMatch && validPassword && validUsername) {
            return true
        }
    }

    const handleSubmit = (e) => {
        if (isValid) {
            e.preventDefault();
            dispatch(register({
                username: username,
                email: email,
                password: password
            }))
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Typography
                varient='h1'>
                Register
                </Typography>
            <Textfield
                label='Username'
                variant='outlined'
                required />
            <Textfield
                label='Email'
                variant='outlined'
                type='email'
                required />
            <Textfield
                label='Password'
                type='password'
                variant='outlined'
                required />
            <Textfield
                label='Confirm password'
                type='password'
                variant='outlined'
                required />
            <Button
            type='submit'>
                Submit
                </Button>
        </form>
    )
}

export default RegisterForm;