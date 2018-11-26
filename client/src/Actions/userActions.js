import { USER_TYPES } from './types';

export const loginUser = (loginData) => dispatch => {
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
		})
};

export const registerUser = (userData) => dispatch => {
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
		})
};

// export const fetchUsers = () => dispatch => {
// }