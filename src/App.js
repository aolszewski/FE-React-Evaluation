import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from './components/login/Login';
import HomePage from './components/home/Home';

import './styles/css/App.css';
import Interest from "./components/interest/Interest";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/interest/:id" component={Interest} />
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
