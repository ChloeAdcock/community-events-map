import {
    CREATED_EVENT,
    CREATE_EVENT_ERROR,
    GET_ALL_EVENTS,
    GET_EVENTS_ERROR,
    DELETE_EVENT,
    DELETE_EVENT_ERROR,
    UPDATE_EVENT,
    UPDATE_EVENT_ERROR
} from '../../actions/types';

const initialState = {
    events: null,
    error: null
}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATED_EVENT:
            return ({
                ...state,
                error: false
            });
        case UPDATE_EVENT:
            return ({
                ...state,
                error: false
            });
        case DELETE_EVENT:
            return ({
                ...state,
                error: false
            });
        case GET_ALL_EVENTS:
            return ({
                ...state,
                error: false,
                events: action.payload
            });
        case UPDATE_EVENT_ERROR:
        case GET_EVENTS_ERROR:
        case CREATE_EVENT_ERROR:
        case DELETE_EVENT_ERROR:
            return ({
                ...state,
                error: true
            });
        default:
            return state;
    }
}

export default eventsReducer;