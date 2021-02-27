import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import accountsReducer from './accounts/accounts';
import eventsReducer from './events/events';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    accounts: accountsReducer,
    events: eventsReducer
});

export default createRootReducer;