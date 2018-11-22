const User = require('../Models/UsersModel');

// Display list of all Users.
exports.user_list = (req, res) => {
	User.find((err,users) => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success: true, data: users});	
	});
};

// Display a user based on their user_id


// Delete a user based on their user_id


// Update user's information


// Update users's role

// Create a new user in our database
exports.new_user = (req, res) => {

	const {fname, lname, email, username, password, role} = req.body;
	const newuser = new User({
		fname: fname, 
		lname: lname,
		email: email,
		username: username,
		password: password,
		role: role
	});

	newuser.save(err => {
		if (err)
			return res.json({success: false, error: err});
		return res.json({success: true})
	});
};
