import React from 'react';
import Typography from '@material-ui/core/Typography';
import Textfield from '@material-ui/core/TextField';

function Login() {
    return (
        <div>
            <Textfield label='Username' variant='outlined' />
            <Textfield label='Password' variant='outlined' />
        </div>
    )
}

export default Login;