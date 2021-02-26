import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/actions/events/events";
import Typography from '@material-ui/core/Typography';

function MapContainer() {

    const dispatch = useDispatch();
    const events = useSelector(state => state.events.events);

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 52.6309, lng: 1.2974
    }

    useEffect(() => {
        dispatch(getEvents());
    }, []);

    if (!events) {
        return <Typography>Loading...</Typography>
    } else {
        console.log(events);
        return (
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={defaultCenter}
                >
                {
                    events.map(event => {
                        return (
                            <Marker key={event.name} position={{
                                lat: Number(event.latitude),
                                lng: Number(event.longitude)
                            }} />
                        )
                    })
                }
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default MapContainer;