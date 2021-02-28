import React, { useEffect } from 'react';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/registerForm/RegisterForm';
import CreateEvent from './components/createEvent/CreateEvent';
import UpdateEvent from './components/updateEvent/UpdateEvent';
import EventDetails from './components/eventDetails/EventDetails';
import AllEvents from './components/allEvents/AllEvents';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from './redux/actions/accounts/accounts';
import { history } from './redux/store';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.accounts.currentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <ConnectedRouter history={history}>
      <div className="App">
        <Route path='/' component={Navbar} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/map' component={AllEvents} user={user}/>
        <Route path='/eventdetails' component={EventDetails} user={user}/>
        <ProtectedRoute path='/createevent' component={CreateEvent} user={user}/>
        <ProtectedRoute path='/updateevent' component={UpdateEvent} user={user}/>
      </div>
    </ConnectedRouter>
  );
}

export default App;
