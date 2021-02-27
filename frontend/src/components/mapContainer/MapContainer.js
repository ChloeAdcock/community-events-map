import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector, useDispatch } from "react-redux";
import { getEvents } from "../../redux/actions/events/events";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function MapContainer() {

    const dispatch = useDispatch();
    const [selected, setSelected] = useState({});
    const [centre, setCentre] = useState({
        lat: 52.6309, lng: 1.2974
    })
    const events = useSelector(state => state.events.events);

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const onSelect = event => {
        setSelected(event);
        setCentre({
            lat: Number(event.latitude),
            lng: Number(event.longitude)
        });
    }

    useEffect(() => {
        dispatch(getEvents());
    }, []);

    if (!events) {
        return <Typography>Loading...</Typography>
    } else {
        return (
            <LoadScript
                googleMapsApiKey={process.env.REACT_APP_API_KEY}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={13}
                    center={centre}
                >
                    {
                        events.map(event => {
                            return (
                                <Marker key={event.name} position={{
                                    lat: Number(event.latitude),
                                    lng: Number(event.longitude)
                                }} onClick={() => onSelect(event)} />
                            )
                        })
                    }
                    {
                        selected.latitude &&
                        (
                            <InfoWindow
                                position={{
                                    lat: Number(selected.latitude),
                                    lng: Number(selected.longitude)
                                }}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <div>
                                    <Typography>{selected.name}</Typography>
                                    <Button>Details</Button>
                                </div>
                            </InfoWindow>
                        )
                    }
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default MapContainer;