import { DOC_TYPES } from '../Actions/types';

const intialState = {
	items: [],
	item: {}
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
		default: 
			return state;
	}

}