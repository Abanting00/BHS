import { USER_TYPES } from '../Actions/types';

const intialState = {
	users: [],
	user: {},
	invites: [],
	user_complaints: [],
	doc_complaints: [],
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
		case USER_TYPES.FETCH_USER_BY_ID:
			return {
				...state,
				user: action.payload.data
			};
		case USER_TYPES.FETCH_USERS:
			return {
				...state,
				users: action.payload.data
			};
		case USER_TYPES.FETCH_INVITES:
			return {
				...state,
				invites: action.payload.data
			};
		case USER_TYPES.FETCH_COMPLAINTS:
			return {
				...state,
				user_complaints: action.payload.data.users,
				doc_complaints: action.payload.data.docs
			};
		case USER_TYPES.NEW_INVITE:
			return {
				...state,
				success: action.payload
			};
		case USER_TYPES.NEW_COMPLAINT:
			return {
				...state,
				success: action.payload
			};
		case USER_TYPES.REMOVE_INVITE:
			return {
				...state,
				success: action.payload
			};
		case USER_TYPES.REMOVE_COMPLAINT:
			return {
				...state,
				success: action.payload
			};
		case USER_TYPES.UPDATE_USER_ROLE:
			return {
				...state,
				success: action.payload
			}
		default:
			return state;
	}
}