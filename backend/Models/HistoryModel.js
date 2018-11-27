const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HistorySchema = new Schema ({
	version: {
		type:Number,
		default: 1,
		required: true
	},

	doc_id: {
		type: Schema.Types.ObjectId,
		ref: 'DocModel',
		required: true
	},

	body: { 
		type: String,
		required: true
	},

	modified_by: {
		type: Schema.Types.ObjectId,
		ref: 'UserModel',
		required: true
	},

	date_modified: {
		type: Date,
		default: Date.now,
		required: true
	}
});

module.exports = mongoose.model('HistoryModel', HistorySchema);