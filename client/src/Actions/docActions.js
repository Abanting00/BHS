import { DOC_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

export const fetchDocs = () => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	fetch("http://localhost:8000/api/docs/", reqOptions)
		.then(res => res.json())
		.then(docs => {
			dispatch({
				type: DOC_TYPES.FETCH_DOCS,
				payload: docs
			});
		})
};

export const fetchDoc = (docid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}
	fetch(`http://localhost:8000/api/docs/${docid}`, reqOptions)
		.then(res => res.json())
		.then(doc => {
			dispatch({
				type: DOC_TYPES.FETCH_DOC,
				payload: doc
			});
		})
};

export const newDoc = (doc) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'POST',
		headers: header,
		body: JSON.stringify(doc)
	}

	fetch("http://localhost:8000/api/docs/", reqOptions)
		.then(res => res.json())
		.then(doc => {
			dispatch({
				type: DOC_TYPES.NEW_DOC,
				payload: doc
			});
		})
}

export const saveDoc = (doc) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'PUT',
		headers: header,
		body: JSON.stringify(doc)
	}

	fetch(`http://localhost:8000/api/docs/body/${doc.id}`, reqOptions)
		.then(res => res.json())
		.then(doc => {
			dispatch({
				type: DOC_TYPES.SAVE_DOC,
				payload: doc
			});
		})
};

export const changeStatus = (docid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'PUT',
		headers: header
	}

	fetch(`http://localhost:8000/api/docs/changestatus/${docid}`, reqOptions)
		.then(res => res.json())
		.then(doc => {
			dispatch({
				type: DOC_TYPES.CHANGE_STATUS,
				payload: doc
			});
		})
}