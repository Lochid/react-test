import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './store/rootReducer';
import { Page1 } from './components/Page1';
import { Page2 } from './components/Page2';

const store = createStore(
  reducer, 
  applyMiddleware(thunk)
);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
