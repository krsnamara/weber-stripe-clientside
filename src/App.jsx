import './App.css';
import Pay from './Pay'
import Success from './Success';
import React from 'react';
import { Route, Switch } from 'react-router-dom'  

function App() {
  return (
    <Switch>
      <Route path="/pay">
        <Pay />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
}

export default App;
