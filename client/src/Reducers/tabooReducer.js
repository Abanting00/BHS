import {TABOO_TYPES} from '../Actions/types';

const initialState = {
	items: [],
	item: {},
	pendingItems: [],
	pendingItem: {}
};

export default function(state = initialState, action) {
	switch(action.type){
		case TABOO_TYPES.FETCH_TABOO:
			return {
				...state,
				items: action.payload.data
			};
		case TABOO_TYPES.FETCH_PENDING:
			return {
				...state,
				pendingItems: action.payload.data
			};
		case TABOO_TYPES.ADD_TABOO:
			return {
				...state,
				success: action.payload
			};
		case TABOO_TYPES.ADD_PENDING:
			return {
				...state,
				pendingItem: action.payload.data
			};
		case TABOO_TYPES.DELETE_TABOO:
			return {
				...state,
				success: action.payload
			};
		case TABOO_TYPES.DELETE_PENDING:
			return {
				...state,
				success: action.payload
			};
		default:
			return state;
	}
}