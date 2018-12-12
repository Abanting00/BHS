import { PENDING_TYPES } from '../Actions/types';

const initialState = {
	items: [],
	item: {}
};

export default function(state = initialState, action) {
	switch(action.type){
		case PENDING_TYPES.FETCH_PENDING:
			return {
				...state,
				items: action.payload.data
			};
		case PENDING_TYPES.ADD_PENDING:
			return {
				...state,
				item: action.payload
			}
		case PENDING_TYPES.DELETE_PENDING:
			return {
				...state,
				success: action.payload
			}
		default:
			return state;
	}
}