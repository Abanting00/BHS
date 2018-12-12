import { DOC_TYPES } from '../Actions/types';

const intialState = {
	items: [],
	item: {},
	body:"",
	members: []
}

export default function(state = intialState, action) {
	switch (action.type) {
		case DOC_TYPES.FETCH_DOCS:
			return {
				...state,
				items: action.payload.data
			};
		case DOC_TYPES.FETCH_DOC:
			return {
				...state,
				doc: action.payload.data,
				body: action.payload.data.body
			}
		case DOC_TYPES.NEW_DOC:
			return {
				...state,
				item: action.payload
			}
		case DOC_TYPES.SAVE_DOC:
			return {
				...state,
				saved: action.payload
			}
		case DOC_TYPES.CHANGE_STATUS:
			return {
				...state,
				status: action.payload
			}
		case DOC_TYPES.FETCH_MEMBERS:
			return {
				...state,
				members: action.payload.data
			}
		case DOC_TYPES.ADD_MEMBER:
			return {
				...state,
				status: action.payload
			}
		case DOC_TYPES.DELETE_MEMBER:
			return {
				...state,
				status: action.payload
			}
		default: 
			return state;
	}

}