import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/accounts/accounts';

// Sort out when to validate text fields
function RegisterForm() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fieldError, setFieldError] = useState({
        username: false,
        email: false,
        password: false,
        confirmPassword: false
    });
    const [confirmPassword, setConfirmPassword] = useState("");
    const errorState = useSelector(state => state.accounts.error);
    const user = useSelector(state => state.accounts.currentUser);

    const passwordsMatch = () => {
        if (password !== confirmPassword) {
            setFieldError({
                ...fieldError,
                ...{ confirmPassword: true }
            })
        } else {
            setFieldError({
                ...fieldError,
                ...{ confirmPassword: false }
            })
        }
    }

    const validEmail = () => {
        // Letters then @ then letters then full stop then letters
        if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
            setFieldError({
                ...fieldError,
                ...{ email: true }
            })
        } else {
            setFieldError({
                ...fieldError,
                ...{ email: false }
            })
        }
    }
    const validPassword = () => {
        // Alphanumeric, must have a number and a letter, 8-15 characters
        if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/)) {
            setFieldError({
                ...fieldError,
                ...{ password: true }
            })
        } else {
            setFieldError({
                ...fieldError,
                ...{ password: false }
            })
        }
    }

    // Must not already exist in the database
    const validateUsername = () => {
        // Alphanumeric between 5 and 10 characters
        if (!username.match(/^[a-zA-Z0-9]{5,10}$/)) {
            setFieldError({
                ...fieldError,
                ...{ username: true }
            })
        } else {
            setFieldError({
                ...fieldError,
                ...{ username: false }
            })
        }
    }

    const handleSubmit = (e) => {
        if (Object.values(fieldError).indexOf(true) === -1) {
            e.preventDefault();
            dispatch(register({
                username: username,
                email: email,
                password: password
            }))
        }
    }

    if (!errorState && user) {
        return <Redirect to='/map' />
    } else {
        return (
            <form onSubmit={handleSubmit}>
                <Typography
                    varient='h1'>
                    Register
                </Typography>
                <Textfield
                    label='Username'
                    value={username}
                    onBlur={validateUsername}
                    error={fieldError.username}
                    onChange={e => setUsername(e.target.value)}
                    variant='outlined'
                    required />
                <Textfield
                    label='Email'
                    error={fieldError.email}
                    onBlur={validEmail}
                    value={email}
                    variant='outlined'
                    onChange={e => setEmail(e.target.value)}
                    type='email'
                    required />
                <Textfield
                    label='Password'
                    type='password'
                    error={fieldError.password}
                    onBlur={validPassword}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    variant='outlined'
                    required />
                <Textfield
                    label='Confirm password'
                    type='password'
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    error={fieldError.confirmPassword}
                    onBlur={passwordsMatch}
                    variant='outlined'
                    required />
                <Button
                    type='submit'>
                    Submit
                </Button>
            </form>
        )
    }
}

export default RegisterForm;