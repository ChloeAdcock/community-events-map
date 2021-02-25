import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import EventForm from '../eventForm/EventForm';
import { useSelector, useDispatch } from 'react-redux';
import { createEvent } from '../../redux/actions/events/events';

function CreateEvent() {

    const dispatch = useDispatch();
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [postcode, setPostcode] = useState("");

    const handleClick = () => {
        console.log(city);
        dispatch(createEvent(
            'name',
            'description',
            'dateTime',
            'addLine1',
            'addLine2',
            city,
            region,
            postcode
        ));
    }

    return (
        <div>
            <Typography variant='h2'>Create New Event</Typography>
            <EventForm 
                handleCityChange={e => setCity(e.target.value)}
                handleRegionChange={e => setRegion(e.target.value)}
                handlePostcodeChange={e => setPostcode(e.target.value)}
                handleClick={handleClick}
            />
        </div>
    )
}

export default CreateEvent;