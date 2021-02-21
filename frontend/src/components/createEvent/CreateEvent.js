import React from 'react';
import Typography from '@material-ui/core/Typography';
import EventForm from '../eventForm/EventForm';

function CreateEvent() {
    return (
        <div>
            <Typography variant='h2'>Create New Event</Typography>
            <EventForm />
        </div>
    )
}

export default CreateEvent;