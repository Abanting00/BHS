export const authHeader = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.token)
        return { 'Authorization': 'Bearer ' + user.token };
    return {};
}

export const isloggedIn = () => {
	let user = JSON.parse(localStorage.getItem('user'));
	return (user && user.token);
}