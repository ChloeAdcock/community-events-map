import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/accounts/accounts';

function LoginForm() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            username: username,
            password: password
        }))
    }
    return (
        <form onSubmit={handleSubmit}>
            <Typography
                varient='h1'>
                Login
                </Typography>
            <Textfield
                onChange={e => setUsername(e.target.value)}
                label='Username'
                variant='outlined'
                required />
            <Textfield
                onChange={e => setPassword(e.target.value)}
                type='password'
                label='Password'
                variant='outlined'
                required />
            <Button
                type='submit'>
                Submit
                    </Button>
        </form>
    )
}

export default LoginForm;