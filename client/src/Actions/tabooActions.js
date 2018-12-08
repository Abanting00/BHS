import { TABOO_TYPES } from './types';

export const fetchTabooList = () => dispatch => {
	fetch('http://localhost:8000/api/words')
	.then(res => res.json())
	.then(words => 
		dispatch({
			type: TABOO_TYPES.FETCH_TABOO,
			payload: words
		})
	);
};