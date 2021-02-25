import { combineReducers } from 'redux';
import accountsReducer from './accounts/accounts';
import eventsReducer from './events/events';

const rootReducer = combineReducers({
    accounts: accountsReducer,
    events: eventsReducer
});

export default rootReducer;