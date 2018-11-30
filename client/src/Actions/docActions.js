import { DOC_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

export const fetchDoc = (docid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	console.log(header);

	fetch(`http://localhost:8000/api/docs/${docid}`, reqOptions)
		.then(res => res.json())
		.then(doc => {
			console.log(doc)
			dispatch({
				type: DOC_TYPES.FETCH_DOC,
				payload: doc
			});
		})
};
