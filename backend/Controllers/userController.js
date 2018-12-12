const User = require('../Models/UsersModel');
const bcrpyt = require('bcrypt');
const jwt = require('jsonwebtoken');
const randtoken = require('rand-token');
const fs = require("fs");


// Display list of all Users.
exports.user_list = (req, res) => {
	User.find((err, users) => {
		if(err)
			return res.json({success: false, error: err, data: []});
		return res.json({success: true, data: users});	
	});
};

// Find user by username
exports.user_by_username = (req, res) => {
	const username = req.params.name;
	const query = User.where({username: username})

	query.findOne((err, user) => {
		if (err) 
			return res.json({success: false, error: err})
		
		if (user)
			return res.json({success: true, message: "User Found."});
		return res.json({success: false, message: "User not found."})
	})

}

// Find user by ID
exports.user_by_id = (req, res) => {
	User.findById(req.params.id, (err,user) => {
		if(err)
			return res.json({success:false, error:err});
		if(user)
			return res.json({success:true, data:user});
		return res.json({success: false, data:{}});
	});
};

// Login a user based on their username and password
exports.user_login = (req, res) => {
	const {username,password} = req.body;
	const query = User.where({username: username});
	
	query.findOne((err, user) => {
		if (err) 
			return res.json({success: false, error: err});
		
		if (user)
			return user;
		return res.json({success:false, message: "Wrong Username or Password."})
	})
	.then(user => {
		bcrpyt.compare(password, user.password, (err, samepassword) =>{
			if (samepassword){
				// If true we need to return a signed jwt token for frontend
				const token = jwt.sign({id: user._id}, process.env.SECRET, { expiresIn: '1h' });
				return res.json({success: true, message: "user found!!!", data:{user: user, token: token}});
			}
			return res.json({success: false, message: "Wrong Username or Password."});
		})
	});
};

// Delete a user based on their username
exports.user_delete = (req, res) => {
	const {username} = req.body;
	const query = User.where({username: username})

	query.findOneAndDelete((err,user) => {
		if (err)
			return res.json({success: false, error: err})
		if (user)
			return res.json({success: true,  message: "User deleted."})
		return res.json({success: false, message: "User not found."})
	});
};

// Update user's photo
exports.user_update_img = (req, res) => {
	const {username} = req.params.username;
	const query = User.where({username: username})

	query.findOne((err, user) => {
		if(err)	
			return res.json({success:false, error:err});
		user.image.data = fs.readFileSync(req.body.userPhoto);
		user.image.type = 	'image/png';
		user.save(err => {
			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true})

		})
	});
};

// Update user interests
exports.user_update_interests = (req, res) => {
	const {username, interests} = req.body;
	const query = {username: username}

	User.findOneAndUpdate(query, {interests: interests}, err => {
		if (err)
			return res.json({success: false, error: err})
		return res.json({success: true})
	});
};

// Update users's role
exports.user_update_role = (req, res) => {
	const {username, role} = req.body;
	query = {username: username}

	User.findOneAndUpdate(query, {role: role}, err => {
		if (err)
			return res.json({success: false, error: err})
		return res.json({success: true})
	});
};


// Create a new user in our database
exports.new_user = (req, res) => {
	const {fname, lname, email, username, password, role,interests} = req.body;

	bcrpyt.hash(password, 12)
		.then(hashedPassword => {
			const newuser = new User({
				fname: fname, 
				lname: lname,
				email: email,
				username: username,
				password: hashedPassword,
				role: role
			});

			newuser.save(err => {
				if (err)
					return res.json({success: false, error: err});
				return res.json({success: true})
			});
		});
};
