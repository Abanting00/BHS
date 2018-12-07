import { DOC_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

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
				payload: doc.success
			});
		})
};