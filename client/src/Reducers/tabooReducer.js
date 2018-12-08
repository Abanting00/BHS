import {TABOO_TYPES} from '../Actions/type';

const initialState = {
	items: [],
	item: {}
};

export default function(state = initialState, action) {
	switch(action.type){
		case FETCH_TABOO:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}