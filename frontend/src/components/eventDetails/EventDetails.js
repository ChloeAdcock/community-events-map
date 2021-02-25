import React from 'react';
import Typography from '@material-ui/core/Typography';
import MapContainer from '../mapContainer/MapContainer';

function EventDetails() {
    return (
        <div>
            <Typography variant='h2'>Name</Typography>
            <Typography variant='h6'>When</Typography>
            <Typography variant='body1'>Description</Typography>
            <Typography variant='body1'>Address</Typography>
            <MapContainer />
        </div>
    )
}

export default EventDetails;