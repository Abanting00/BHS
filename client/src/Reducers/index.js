import { combineReducers } from 'redux';
import docReducer from './docReducer';
import userReducer from './userReducer';
import tabooReducer from './tabooReducer';
import historyReducer from './historyReducer';
import pendingReducer from './pendingReducer';

export default combineReducers({
	docs: docReducer,
	users: userReducer,
	words: tabooReducer,
	histories: historyReducer,
	pending: pendingReducer
});