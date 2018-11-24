const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const TabooSchema = new Schema({
	word: {
		type: String,
		require: true,
		max: 26
	}
});

module.exports = mongoose.model('TabooModel',TabooSchema);