import axios from "axios";
import Geocode from "react-geocode";
import { CREATED_EVENT, CREATE_EVENT_ERROR } from "../types";

Geocode.setLocationType("ROOFTOP");
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

const latLongFromAddress = async (addLine1, city, region, postcode) => {
  try {
    const formattedAddress = `${addLine1}, ${city}, ${region}, ${postcode}`;
    const res = await Geocode.fromAddress(formattedAddress);
    const { lat, lng } = res.results[0].geometry.location;
    return [lat, lng];
  } catch (err) {
      console.log(err);
  }
};

export const createEvent = (
  name,
  description,
  dateTime,
  addLine1,
  city,
  region,
  postcode
) => async (dispatch) => {
  try {
    const latLong = await latLongFromAddress(addLine1, city, region, postcode);
    const options = {
        headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
        }
    }
    console.log(latLong[0]);
    console.log(latLong[1]);
    const res = await axios.post('http://127.0.0.1:8000/events/create/', {
        name: name,
        description: description,
        date_time: dateTime,
        latitude: latLong[0],
        longitude: latLong[1]
    }, options);
    console.log(res);
    dispatch({
        type: CREATED_EVENT,
        payload: res.data
    });
} catch (err) {
    dispatch({
        type: CREATE_EVENT_ERROR,
        payload: err
    })
}
};
