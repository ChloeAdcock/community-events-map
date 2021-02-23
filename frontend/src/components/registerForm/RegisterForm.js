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

    // Must not already exist in the database
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
                error={validUsername}
                onChange={e => setUsername(e.target.value)}
                helperText='Username must be at least 6 characters'
                variant='outlined'
                required />
            <Textfield
                label='Email'
                variant='outlined'
                onChange={e => setEmail(e.target.value)}
                helperText='Must be a valid email'
                type='email'
                required />
            <Textfield
                label='Password'
                type='password'
                error={validPassword}
                onChange={e => setPassword(e.target.value)}
                helperText='Passwords must be at least 8 characters and contain a number'
                variant='outlined'
                required />
            <Textfield
                label='Confirm password'
                type='password'
                onChange={e => setConfirmPassword(e.target.value)}
                error={passwordsMatch}
                helperText='Passwords must match'
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