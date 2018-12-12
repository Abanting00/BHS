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

export const fetchPendingList = () => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}
	fetch('http://localhost:8000/api/pendingwords', reqOptions)
	.then(res => res.json())
	.then(words => 
		dispatch({
			type: TABOO_TYPES.FETCH_PENDING,
			payload: words
		})
	);
};

export const addTabooWord = (word) => dispatch => {
	return new Promise((resolve, reject) => {
		const header = authHeader();
		const reqOptions = {
			method: 'POST',
			headers: header
		}
		fetch(`http://localhost:8000/api/words/${word}`, reqOptions)
		.then(res => res.json())
		.then(words => { 
			dispatch({
				type: TABOO_TYPES.ADD_TABOO,
				payload: words
			})
			resolve();
		});
	})
};

export const addPendingWord = (word) => dispatch => {
	return new Promise((resolve, reject) => {
		const header = authHeader();
		const reqOptions = {
			method: 'POST',
			headers: header
		}
		fetch(`http://localhost:8000/api/pendingwords/${word}`, reqOptions)
		.then(res => res.json())
		.then(words => {
			dispatch({
				type: TABOO_TYPES.ADD_PENDING,
				payload: words
			})
			resolve()
		});
	});
};

export const deletePendingWord = (word) => dispatch => {
	return new Promise((resolve, reject) => {
		const header = authHeader();
		const reqOptions = {
			method: 'DELETE',
			headers: header
		}
		fetch(`http://localhost:8000/api/pendingwords/${word}`, reqOptions)
		.then(res => res.json())
		.then(words => {
			dispatch({
				type: TABOO_TYPES.DELETE_PENDING,
				payload: words
			})
			resolve()
		});
	});
};

export const deleteTabooWord = (word) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'DELETE',
		headers: header
	}
	fetch(`http://localhost:8000/api/words/${word}`, reqOptions)
	.then(res => res.json())
	.then(words => 
		dispatch({
			type: TABOO_TYPES.DELETE_TABOO,
			payload: words
		})
	);
};
