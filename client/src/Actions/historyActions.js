import { HISTORY_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

export const fetchHistories = (docid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	fetch(`http://localhost:8000/api/history/${docid}`, reqOptions)
		.then(res => res.json())
		.then(histories => {
			dispatch({
				type: HISTORY_TYPES.FETCH_DOC_HIST,
				payload: histories
			});
		})
}