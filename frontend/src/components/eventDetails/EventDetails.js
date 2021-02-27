import React from 'react';
import Typography from '@material-ui/core/Typography';
import MapContainer from '../mapContainer/MapContainer';

function EventDetails(props) {
    return (
        <div>
            <Typography variant='h2'>{props.name}</Typography>
            <Typography variant='h6'>When</Typography>
            <Typography variant='body1'>Description</Typography>
            <Typography variant='body1'>Address</Typography>
            <MapContainer />
        </div>
    )
}

export default EventDetails;