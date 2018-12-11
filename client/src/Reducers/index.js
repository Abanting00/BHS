import { combineReducers } from 'redux';
import docReducer from './docReducer';
import userReducer from './userReducer';
import tabooReducer from './tabooReducer';
import historyReducer from './historyReducer';

export default combineReducers({
	docs: docReducer,
	users: userReducer,
	words: tabooReducer,
	histories: historyReducer
});