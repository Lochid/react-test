import { combineReducers } from 'redux';
import { reducer } from './counter';

export default combineReducers({
    counter: reducer,
});
