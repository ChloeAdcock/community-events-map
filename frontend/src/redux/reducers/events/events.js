import {
    CREATED_EVENT,
    CREATE_EVENT_ERROR
} from '../../actions/types';

const initialState = {
    event: null,
    error: null
}

function eventsReducer(state = initialState, action) {
    switch (action.type) {
        case CREATED_EVENT:
            return ({
                ...state,
                event: action.payload,
                error: false
            });
        case CREATE_EVENT_ERROR:
            return ({
                ...state,
                error: true
            });
        default:
            return state;
    }
}

export default eventsReducer;