import { combineReducers } from 'redux';
import docReducer from './docReducer';
import userReducer from './userReducer';

export default combineReducers({
	docs: docReducer,
	users: userReducer
});