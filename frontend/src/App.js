import React from 'react';
import Navbar from './components/navbar/Navbar';
import MapContainer from './components/mapContainer/MapContainer';
import LoginForm from './components/loginForm/LoginForm';
import RegisterForm from './components/registerForm/RegisterForm';
import CreateEvent from './components/createEvent/CreateEvent';
import UpdateEvent from './components/updateEvent/UpdateEvent';
import EventDetails from './components/eventDetails/EventDetails';
import Filter from './components/filter/Filter';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/'>
          <Navbar />
        </Route>
        <Route path='/map'>
          <Filter />
        </Route>
        <Route path='/map'>
          <MapContainer />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/register'>
          <RegisterForm />
        </Route>
        <Route path='/createevent'>
          <CreateEvent />
        </Route>
        <Route path='/updateevent'>
          <UpdateEvent />
        </Route>
        <Route path='/eventdetails'>
          <EventDetails />
        </Route>
      </div>
    </Router>
  );
}

export default App;
