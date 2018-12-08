import { TABOO_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

export const fetchTabooList = () => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}
	fetch('http://localhost:8000/api/words', reqOptions)
	.then(res => res.json())
	.then(words => 
		dispatch({
			type: TABOO_TYPES.FETCH_TABOO,
			payload: words
		})
	);
};