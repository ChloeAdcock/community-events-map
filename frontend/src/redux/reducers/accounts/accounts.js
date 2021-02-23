import { LOGGED_IN, LOGIN_ERROR } from '../../actions/types';

const initialState = {
    currentUser: null,
    error: null
}

function accountsReducer (state = initialState, action) {
    switch(action.type){
        case LOGGED_IN:
            return({
                ...state,
                currentUser: payload.user,
                error: false
            });
        case LOGIN_ERROR:
            return({
                ...state,
                error: true
            });
        default:
            return state;
    }
}

export default accountsReducer;