import { combineReducers } from 'redux';
import { reducer as counterReducer } from './counter';
import { reducer as postListReducer } from './postList';

export default combineReducers({
    counter: counterReducer,
    postList: postListReducer
});
