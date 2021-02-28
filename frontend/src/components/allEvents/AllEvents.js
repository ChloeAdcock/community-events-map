import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { getEvents } from "../../redux/actions/events/events";
import MapContainer from '../mapContainer/MapContainer';
import Filter from '../filter/Filter';
import Typography from '@material-ui/core/Typography';

function AllEvents() {

    const dispatch = useDispatch();
    const history = useHistory();
    const events = useSelector(state => state.events.events);

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const handleClick = (selected) => {
        history.push({
            pathname: "/eventdetails",
            state: {
                response: selected
            }
        })
    }

    useEffect(() => {
        dispatch(getEvents());
    }, []);

    return (
        <div>
            <Filter />
            {!events ? <Typography>Loading...</Typography> : <MapContainer
                mapStyles={mapStyles}
                events={events}
                handleClick={handleClick}
                centre={{
                    lat: 52.6309, lng: 1.2974
                }}
            />}
        </div>
    )
}

export default AllEvents;