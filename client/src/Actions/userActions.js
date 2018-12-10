import { USER_TYPES } from './types';
import { authHeader } from '../Helper/authHeader';

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
			console.log(user);
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