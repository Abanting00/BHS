const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	fname: {
		type:String, 
		required: true, 
		max: 100
	},
	lname: {
		type:String, 
		required: true, 
		max:100
	},
	email: {
		type:String, 
		required: true
	},
	username: {
		type:String, 
		required: true
	},
	password: {
		type:String, 
		required: true
	},
	image: {
		type: String,
		data: Buffer,
		default: ''
	},
	role: {
		type: String,
		required: true, 
		enum: ['SU', 'GU', 'OU'], 
		default: 'GU'
	},
	interests: {
		type: Array,
		default: []
	},
	invites: [{ type: Schema.Types.ObjectId, ref: 'DocModel'}],
	complaints: [{type: Schema.Types.ObjectId, ref: 'UserModel'}],
	complaint_body: [String]
});


UserSchema.virtual('fullname')
	.get(function() {
		return this.fname + ' ' + this.lname;
});

module.exports = mongoose.model('UserModel', UserSchema);