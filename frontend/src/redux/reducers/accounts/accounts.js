import {
    LOGGED_IN,
    LOGIN_ERROR,
    USER_REGISTERED,
    REGISTER_ERROR,
    LOGGED_OUT,
    LOGOUT_ERROR,
    USER_AUTHENTICATED,
    USER_ERROR
} from '../../actions/types';

const initialState = {
    currentUser: null,
    error: null
}

function accountsReducer(state = initialState, action) {
    switch (action.type) {
        case USER_REGISTERED:
            return ({
                ...state,
                currentUser: action.payload.username,
                error: false
            });
        case USER_AUTHENTICATED:
            return ({
                ...state,
                currentUser: action.payload.username,
                error: false
            })
        case LOGGED_IN:
            return ({
                ...state,
                currentUser: action.payload.user.username,
                error: false
            });
        case LOGGED_OUT:
            return ({
                ...state,
                currentUser: null,
                error: false
            })
        case REGISTER_ERROR:
        case LOGIN_ERROR:
        case LOGOUT_ERROR:
        case USER_ERROR:
            return ({
                ...state,
                error: true
            });
        default:
            return state;
    }
}

export default accountsReducer;