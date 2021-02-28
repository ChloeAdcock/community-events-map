import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import MapContainer from '../mapContainer/MapContainer';
import { addressFromLatLong } from '../../geocode/geocode';
import { deleteEvent } from '../../redux/actions/events/events';

function EventDetails(props) {

    const dispatch = useDispatch();
    const user = useSelector(state => state.accounts.currentUser);
    const history = useHistory();
    const [address, setAddress] = useState("");
    const [selectedEvent, setSelectedEvent] = useState(props.history.location.state);
    const [eventArray, setEventArray] = useState([]);

    useEffect(async () => {
        const formattedAddress = await addressFromLatLong(selectedEvent.latitude, selectedEvent.longitude);
        setAddress(formattedAddress);
        setEventArray(oldArray => [...oldArray, selectedEvent]);
    }, []);

    const handleDelete = () => {
        dispatch(deleteEvent(selectedEvent.id));
    }

    const handleUpdate = () => {
        history.push({
            pathname: "/updateevent",
            state: {
                event: selectedEvent,
                address: address
            }
        })
    }

    const mapStyles = {
        height: "50vh",
        width: "50%"
    };

    if (!eventArray) {
        return <Typography>Loading...</Typography>
    } else {
        return (
            <div>
                <Typography variant='h2'>{selectedEvent.name}</Typography>
                <Typography variant='h6'>{selectedEvent.date_time}</Typography>
                <Typography variant='body1'>{selectedEvent.description}</Typography>
                <Typography variant='body1'>{address}</Typography>
                {user ?
                    <div>
                        <Button onClick={handleUpdate}>Update</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    </div>
                    :
                    <div />
                }
                <MapContainer events={eventArray} mapStyles={mapStyles} centre={{
                    lat: Number(selectedEvent.latitude), lng: Number(selectedEvent.longitude)
                }} />
            </div>
        )
    }
}

export default EventDetails;