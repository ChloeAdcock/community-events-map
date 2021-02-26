import axios from "axios";
import Geocode from "react-geocode";
import {
  CREATED_EVENT,
  CREATE_EVENT_ERROR,
  GET_ALL_EVENTS,
  GET_EVENTS_ERROR
} from "../types";
import { push } from 'connected-react-router';

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
    const res = await axios.post('http://127.0.0.1:8000/events/create/', {
      name: name,
      description: description,
      date_time: dateTime,
      latitude: Math.round(latLong[0] * Math.pow(10, 6)) / Math.pow(10, 6),
      longitude: Math.round(latLong[1] * Math.pow(10, 6)) / Math.pow(10, 6)
    }, options);
    dispatch({
      type: CREATED_EVENT,
      payload: res.data
    });
    dispatch(push('/map'));
  } catch (err) {
    dispatch({
      type: CREATE_EVENT_ERROR,
      payload: err
    })
  }
};

export const getEvents = () => async (dispatch) => {
  try {
    const options = {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    }
    const res = await axios.get('http://127.0.0.1:8000/events/list/', options);
    dispatch({
      type: GET_ALL_EVENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_EVENTS_ERROR,
      payload: err
    })
  }
}
