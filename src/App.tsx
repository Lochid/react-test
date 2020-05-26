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
import createSagaMiddleware from 'redux-saga';
import reducer from './store/rootReducer';
import { PostTable } from './components/PostTable';
import { Page2 } from './components/Page2';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(thunk, sagaMiddleware)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/postTable">
            <PostTable />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Redirect from='/' to='/postTable' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
