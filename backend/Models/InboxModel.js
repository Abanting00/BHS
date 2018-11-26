const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InboxSchema = new Schema({
	subject: {
		type: String,
		required: true,
		max: 20
	},
	message: {
		type: String,
		required: true
		min: 10,
		max: 150
	},
	recipient: {
		type: Schema.Types.ObjectId,
		ref:'UserModel'
		required: true 
	},
	sender: {
		type: Schema.Types.ObjectId,
		ref:'UserModel'
		required: true 
	},
	sent_date: {
		type: Date,
		default: Date.now 
	},
	viewed:{
		type: Boolean,
		required: true,
		default: false
	}

});

module.exports = mongoose.model('Inbox', InboxSchema);
