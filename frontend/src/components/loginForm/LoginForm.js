import React from 'react';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function LoginForm() {
    return (
        <div>
            <Typography varient='h1'>Login</Typography>
            <Textfield label='Username' variant='outlined' required />
            <Textfield label='Password' variant='outlined' required />
            <Button>Submit</Button>
        </div>
    )
}

export default LoginForm;