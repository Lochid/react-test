import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Redirect from='/' to='/page1' />
        </Switch>
    </Router>
  );
}

export default App;
