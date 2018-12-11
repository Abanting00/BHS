const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const DocSchema = new Schema ({
	title: { 
		type: String,
		required: true,
		max: 100
	},
	description: {
		type: String,
		required: true,
		max: 150
	},

	body: {
		type: String
	},

	version: { 
		type: Number,
		required: true,
		default: 1
	},

	locked_by: {
		type: Schema.Types.ObjectId,
		ref:'UserModel'
	},
	
	is_locked: {
		type: Boolean,
		required: true,
		default: false
	},

	permission: {
		type: String,
		required: true,
		enum: ['Restricted','Public','Shared','Private'],
		default: 'Public'
	},

	owner: {
		type: Schema.Types.ObjectId,
		ref:'UserModel',
		required: true
	},

	members: [{ type : Schema.Types.ObjectId, ref: 'UserModel' }],

	views: {
		type: Number, 
		default: 0,
		required: true
	},

	modified: {
		type: Date, 
		default: Date.now 
	}
});

module.exports = mongoose.model('DocModel', DocSchema);