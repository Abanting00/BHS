const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const PendingTabooSchema = new Schema({
	word: {
		type: String,
		require: true,
		max: 26
	}
});


module.exports = mongoose.model('PendingTabooModel',PendingTabooSchema);