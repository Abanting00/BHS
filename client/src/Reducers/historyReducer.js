import { HISTORY_TYPES } from '../Actions/types';

const initialState = {
	items: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case HISTORY_TYPES.FETCH_DOC_HIST:
			return {
				...state,
				items: action.payload.data
			}
		default:
			return state;
	}
}