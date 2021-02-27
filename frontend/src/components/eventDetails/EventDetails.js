import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import MapContainer from '../mapContainer/MapContainer';
import { addressFromLatLong } from '../../geocode/geocode';

function EventDetails(props) {

    const [address, setAddress] = useState("");
    const event = props.history.location.state.response;
    const events = [];

    useEffect(async () => {
        const formattedAddress = await addressFromLatLong(event.latitude, event.longitude);
        setAddress(formattedAddress);
    }, []);

    const convertToArray = (event) => {
        events.push(event);
        return events;
    }

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    if (!events) {
        return <Typography>Loading...</Typography>
    } else {
        return (
            <div>
                <Typography variant='h2'>{event.name}</Typography>
                <Typography variant='h6'>{event.date_time}</Typography>
                <Typography variant='body1'>{event.description}</Typography>
                <Typography variant='body1'>{address}</Typography>
                <Button>Update</Button>
                <Button>Delete</Button>
                <MapContainer events={convertToArray(event)} mapStyles={mapStyles}/>
            </div>
        )
    }
}

export default EventDetails;