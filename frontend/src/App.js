import React from 'react';
import Navbar from './components/navbar/Navbar';
import MapContainer from './components/mapContainer/MapContainer';
import LoginForm from './components/loginForm/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/'>
          <Navbar />
        </Route>
        <Route path='/map'>
          <MapContainer />
        </Route>
        <Route path='/login'>
          <LoginForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
