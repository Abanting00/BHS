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

	is_locked: {
		type: Boolean,
		required: true,
		default: false
	},

	permission: {
		type: String,
		required: true,
		enum: ['restricted','public','shared','private'],
		default: 'public'
	},

	owner: {
		type: Schema.Types.ObjectId,
		ref:'UserModel',
		required: true
	},

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