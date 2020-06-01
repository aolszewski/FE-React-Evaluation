import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from './login';
import HomePage from './home';

import './styles/css/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
