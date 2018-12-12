import { PENDING_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';


export const fetchPendingList = () => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}
	fetch('http://localhost:8000/api/pendingOU', reqOptions)
	.then(res => res.json())
	.then(words => 
		dispatch({
			type: PENDING_TYPES.FETCH_PENDING,
			payload: words
		})
	);
};

export const addPending = (userid) => dispatch => {
	return new Promise((resolve, reject) => {
		const header = authHeader();
		const reqOptions = {
			method: 'POST',
			headers: header
		}
		fetch(`http://localhost:8000/api/pendingOU/${userid}`, reqOptions)
		.then(res => res.json())
		.then(words => { 
			dispatch({
				type: TABOO_TYPES.ADD_PENDING,
				payload: words
			})
			resolve();
		});
	})
};


export const deletePendingUser = (userid) => dispatch => {
	return new Promise((resolve, reject) => {
		const header = authHeader();
		const reqOptions = {
			method: 'DELETE',
			headers: header
		}
		fetch(`http://localhost:8000/api/pendingOU/${userid}`, reqOptions)
		.then(res => res.json())
		.then(words => {
			dispatch({
				type: PENDING_TYPES.DELETE_PENDING,
				payload: words
			})
			resolve()
		});
	});
};