import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from './login';

import {fakeInterests, fakeSkills} from './dummy-data';

import './styles/css/App.css';

function App() {
  console.log('test return', fakeInterests);
  console.log('test return', fakeSkills);
  return (
    <div className="App">
      <p>This is App.js</p>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
