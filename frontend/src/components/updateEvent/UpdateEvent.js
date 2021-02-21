import React from 'react';
import Typography from '@material-ui/core/Typography';
import EventForm from '../eventForm/EventForm';

function UpdateEvent() {
    return (
        <div>
            <Typography variant='h2'>Update Event</Typography>
            <EventForm />
        </div>
    )
}

export default UpdateEvent;