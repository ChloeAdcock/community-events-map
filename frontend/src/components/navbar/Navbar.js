import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Navbar() {
    return (
        <div>
            <AppBar position='fixed' marginBottom='1%'>
                <Toolbar>
                    <Typography variant='h6'>
                        Community Events
            </Typography>
                    <Button color='inherit'>New Event</Button>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
            {/* Empty toolbar to prevent content being rendered under navbar */}
            <Toolbar />
        </div>
    )
}

export default Navbar;