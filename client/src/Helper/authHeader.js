export const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token)
        return {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + user.token };
    return {'Content-Type': 'application/json'};
}

export const Logout = () => {
	localStorage.removeItem('user');
}

export const isloggedIn = () => {
	let user = JSON.parse(localStorage.getItem('user'));
	return (user && user.token);
}

export const getUserID = () => {
	let user = JSON.parse(localStorage.getItem('user'));
	return user.user._id;
}