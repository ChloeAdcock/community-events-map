import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant='h6'>
                        Community Events
            </Typography>
                    <Button color='inherit'>New Event</Button>
                    <Button
                        component={Link}
                        to='/login'
                        color='inherit'>
                        Login
                            </Button>
                </Toolbar>
            </AppBar>
            {/* Empty toolbar to prevent content being rendered under navbar */}
            <Toolbar />
        </div>
    )
}

export default Navbar;