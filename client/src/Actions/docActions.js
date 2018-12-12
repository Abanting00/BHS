import { DOC_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

export const fetchDocs = () => dispatch => {
	return new Promise((resolve, reject) => {
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
				resolve();
			})
	});
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
	return new Promise((resolve, reject) => {
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
				resolve();
			})
	})
};

export const changeStatus = (docid,userid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'PUT',
		headers: header
	}

	fetch(`http://localhost:8000/api/docs/changestatus/${docid}/user/${userid}`, reqOptions)
		.then(res => res.json())
		.then(doc => {
			dispatch({
				type: DOC_TYPES.CHANGE_STATUS,
				payload: doc
			});
		})
}

export const fetchMembers = (docid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	fetch(`http://localhost:8000/api/docs/members/${docid}`, reqOptions)
		.then(res => res.json())
		.then(members => {
			dispatch({
				type: DOC_TYPES.FETCH_MEMBERS,
				payload: members
			});
		})
}

export const addMember = (docid,username) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'PUT',
		headers: header
	}

	fetch(`http://localhost:8000/api/docs/${docid}/member/${username}`, reqOptions)
		.then(res => res.json())
		.then(doc => {
			dispatch({
				type: DOC_TYPES.ADD_MEMBER,
				payload: doc
			});
		})
}

export const deleteMember = (docid,userid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'DELETE',
		headers: header
	}
	
	fetch(`http://localhost:8000/api/docs/${docid}/member/${userid}`, reqOptions)
	.then(res => res.json())
	.then(res => 
		dispatch({
			type: DOC_TYPES.DELETE_MEMBER,
			payload: res
		})
	);
};