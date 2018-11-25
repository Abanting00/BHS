import { USER_TYPES } from './types';


const loginData = {
	username: 'Oreo',
	password: 'boy123'
}


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

export const fetchUsers = () => dispatch => {
}