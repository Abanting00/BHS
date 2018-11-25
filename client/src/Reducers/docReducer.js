import { FETCH_DOCS, NEW_DOC } from '../Actions/types';

const intialState = {
	items: [],
	item: {}
}

export default function(state = intialState, action) {
	switch (action.type) {
		case FETCH_DOCS:
			return {
				...state,
				items: action.payload.data
			};
		case NEW_DOC:
			return {
				...state,
				item: action.payload
			}
		default: 
			return state;
	}

}