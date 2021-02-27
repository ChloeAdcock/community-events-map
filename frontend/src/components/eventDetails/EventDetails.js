import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import MapContainer from '../mapContainer/MapContainer';
import { addressFromLatLong } from '../../geocode/geocode';

function EventDetails(props) {

    let address = "";
    const event = props.history.location.state.response;
    const events = [];

    useEffect(async () => {
        address = await addressFromLatLong(event.latitude, event.longitude);
        console.log(address);
    }, []);

    const convertToArray = (event) => {
        events.push(event);
        return events;
    }

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    if (!events || !address) {
        return <Typography>Loading...</Typography>
    } else {
        return (
            <div>
                <Typography variant='h2'>{event.name}</Typography>
                <Typography variant='h6'>{event.date_time}</Typography>
                <Typography variant='body1'>{event.description}</Typography>
                <Typography variant='body1'>{address}</Typography>
                <MapContainer events={convertToArray(event)} mapStyles={mapStyles}/>
            </div>
        )
    }
}

export default EventDetails;