import { combineReducers } from 'redux';
import docReducer from './docReducer';
import userReducer from './userReducer';
import tabooReducer from './tabooReducer';

export default combineReducers({
	docs: docReducer,
	users: userReducer,
	words: tabooReducer
});