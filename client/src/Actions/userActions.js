import { USER_TYPES } from './types';
import { authHeader, getUserID } from '../Helper/authHeader';

export const loginUser = (loginData) => dispatch => {
	return new Promise((resolve, reject) => {
		const reqOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(loginData)
		}

		fetch('http://localhost:8000/api/login', reqOptions)
			.then(res => res.json())
			.then(user => {
				if(user.data && user.data.token){
					localStorage.setItem('user', JSON.stringify(user.data));
				}
				dispatch({
					type: USER_TYPES.LOGIN_USER,
					payload: user.success
				});
				resolve();
			})
	})
	
};

export const registerUser = (userData) => dispatch => {
	return new Promise((resolve,reject) => {
		const reqOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'}, //sending a JSON file in the body 
		body: JSON.stringify(userData)
	}

	fetch('http://localhost:8000/api/register', reqOptions)
		.then(res => res.json()) //getting response and changing to JSON
		.then(user => {
			dispatch({
				type: USER_TYPES.REGISTER_USER,
				payload: user.success
			});
			resolve();
		})
	})
};

export const fetchUser =  (username) => dispatch => {
	return new Promise((resolve, reject) => {
		const reqOptions = {
		method: 'GET'
	}

	fetch(`http://localhost:8000/api/user/${username}`, reqOptions)
		.then(res => res.json())
		.then(user => {
			dispatch({
				type: USER_TYPES.FETCH_USER,
				payload: user.success
			});
			resolve();
		})
	})
};

export const fetchUserById = (userid) => dispatch => {
	const reqOptions = {
		method: 'GET'
	}

	fetch(`http://localhost:8000/api/user/findbyid/${userid}`, reqOptions)
		.then(res => res.json())
		.then(user => {
			dispatch({
				type: USER_TYPES.FETCH_USER_BY_ID,
				payload: user
			})
		})	
};

export const fetchUsers = () => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	fetch("http://localhost:8000/api/users/", reqOptions)
		.then(res => res.json())
		.then(users => {
			dispatch({
				type: USER_TYPES.FETCH_USERS,
				payload: users
			});
		})
}

export const fetchInvites = () => dispatch => {
	const header = authHeader();
	const userid = getUserID();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	fetch(`http://localhost:8000/api/invite/${userid}`, reqOptions)
		.then(res => res.json())
		.then(docs => {
			dispatch({
				type: USER_TYPES.FETCH_INVITES,
				payload: docs
			});
		})
}


export const fetchComplaints = () => dispatch => {
	const header = authHeader();
	const userid = getUserID();
	const reqOptions = {
		method: 'GET',
		headers: header
	}

	fetch(`http://localhost:8000/api/complaint/${userid}`, reqOptions)
		.then(res => res.json())
		.then(docs => {
			dispatch({
				type: USER_TYPES.FETCH_COMPLAINTS,
				payload: docs
			});
		})
}

export const inviteUser = (docid,userid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'PUT',
		headers: header
	}

	fetch(`http://localhost:8000/api/invite/${userid}/doc/${docid}`, reqOptions)
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: USER_TYPES.NEW_INVITE,
				payload: res
			});
		})
}

export const complaintUser = (ownerid,userid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'PUT',
		headers: header
	}

	fetch(`http://localhost:8000/api/complaint/${ownerid}/user/${userid}`, reqOptions)
		.then(res => res.json())
		.then(res => {
			dispatch({
				type: USER_TYPES.NEW_COMPAINT,
				payload: res
			});
		})
}

export const deleteInvite = (docid,userid) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'DELETE',
		headers: header
	}
	
	fetch(`http://localhost:8000/api/invite/${userid}/doc/${docid}`, reqOptions)
	.then(res => res.json())
	.then(res => 
		dispatch({
			type: USER_TYPES.REMOVE_INVITE,
			payload: res
		})
	);
};

export const deleteComplaint = (ownerid,userid,message) => dispatch => {
	const header = authHeader();
	const reqOptions = {
		method: 'DELETE',
		headers: header,
		body: JSON.stringify(message)
	}

	fetch(`http://localhost:8000/api/complaint/${ownerid}/doc/${userid}`, reqOptions)
	.then(res => res.json())
	.then(res => 
		dispatch({
			type: USER_TYPES.REMOVE_COMPLAINT,
			payload: res
		})
	);
}