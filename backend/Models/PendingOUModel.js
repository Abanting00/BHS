const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PendingOUSchema = new Schema({
	guest:{
		type: Schema.Types.ObjectId,
		ref: 'UserModel',
		require: true
	}
})

module.exports = mongoose.model('PendingOUModel', PendingOUSchema);