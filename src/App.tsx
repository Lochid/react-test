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
import { Post } from './components/Post';
import { watchFetchPostList } from './store/postList/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  applyMiddleware(thunk, sagaMiddleware)
);
sagaMiddleware.run(watchFetchPostList);


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/postTable">
            <PostTable />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Redirect from='/' to='/postTable' />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
