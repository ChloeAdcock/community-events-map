import axios from "axios";
import {
  CREATED_EVENT,
  CREATE_EVENT_ERROR,
  GET_ALL_EVENTS,
  GET_EVENTS_ERROR,
  DELETE_EVENT,
  DELETE_EVENT_ERROR
} from "../types";
import { push } from 'connected-react-router';
import { latLongFromAddress } from '../../../geocode/geocode';

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

export const deleteEvent = (eventId) => async (dispatch) => {
  try {
    const options = {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      }
    }
    const res = await axios.delete(`http://127.0.0.1:8000/events/delete/${eventId}`, options);
    dispatch({
      type: DELETE_EVENT,
      payload: res.data
    });
    dispatch(push('/map'));
  } catch (err) {
    dispatch({
      type: DELETE_EVENT_ERROR,
      payload: err
    });
  }
}
