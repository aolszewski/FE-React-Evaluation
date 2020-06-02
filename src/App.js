import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import Login from './components/login/Login';
import HomePage from './components/home/Home';

import './styles/css/App.css';
import Interest from './components/interest/Interest';
import SkillList from './components/skills/SkillList';
import Skill from './components/skills/Skill';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/interest/:id" component={Interest} />
        <Route path="/skills">
          <SkillList />
        </Route>
        <Route path="/skill/:id" component={Skill} />
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
