import axios from "axios";
import Geocode from "react-geocode";
import { CREATED_EVENT, CREATE_EVENT_ERROR } from "../types";

Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

const latLongFromAddress = (addLine1, addLine2, city, region, postcode) => {
    const formattedAddress = `${addLine1}, ${city}, ${region}, ${postcode}`;
    Geocode.fromAddress(formattedAddress).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat, lng);
        },
        (error) => {
            console.error(error);
        }
    );
};

export const createEvent = (
    name,
    description,
    dateTime,
    addLine1,
    addLine2,
    city,
    region,
    postcode
) => async (dispatch) => {
    latLongFromAddress(addLine1, addLine2, city, region, postcode);
};
