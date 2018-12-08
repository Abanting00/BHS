import {TABOO_TYPES} from '../Actions/types';

const initialState = {
	items: [],
	item: {}
};

export default function(state = initialState, action) {
	switch(action.type){
		case TABOO_TYPES.FETCH_TABOO:
			return {
				...state,
				items: action.payload.data
			};
		default:
			return state;
	}
}