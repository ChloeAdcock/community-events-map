import React, { useEffect } from 'react';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Navbar from './components/navbar/Navbar';
import MapContainer from './components/mapContainer/MapContainer';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/registerForm/RegisterForm';
import CreateEvent from './components/createEvent/CreateEvent';
import UpdateEvent from './components/updateEvent/UpdateEvent';
import EventDetails from './components/eventDetails/EventDetails';
import Filter from './components/filter/Filter';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { currentUser } from './redux/actions/accounts/accounts';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.accounts.currentUser);

  useEffect(() => {
    dispatch(currentUser());
  }, []);

  return (
    <Router>
      <div className="App">
        <Route path='/' component={Navbar} />
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <ProtectedRoute path='/map' component={Filter} user={user}/>
        <ProtectedRoute path='/map' component={MapContainer} user={user}/>
        <ProtectedRoute path='/createevent' component={CreateEvent} user={user}/>
        <ProtectedRoute path='/updateevent' component={UpdateEvent} user={user}/>
        <ProtectedRoute path='/eventdetails' component={EventDetails} user={user}/>
      </div>
    </Router>
  );
}

export default App;
