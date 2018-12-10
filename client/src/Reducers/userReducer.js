import { USER_TYPES } from '../Actions/types';

const intialState = {
	users: [],
	user: {},
	status: false,
	exists: false
}

export default (state = intialState, action) => {
	switch (action.type) {
		case USER_TYPES.LOGIN_USER:
			return {
				...state,
				status: action.payload
			};
		case USER_TYPES.REGISTER_USER:
			return {
				...state,
				status: action.payload
			};
		case USER_TYPES.FETCH_USER:
			return {
				...state,
				exists: action.payload
			};
		case USER_TYPES.FETCH_USERS:
			return {
				...state,
				users: action.payload.data
			}
		default:
			return state;
	}
}