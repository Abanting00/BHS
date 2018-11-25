import { USER_TYPES } from '../Actions/types';

const intialState = {
	users: [],
	user: {},
	status: true
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
		default:
			return state;
	}
}