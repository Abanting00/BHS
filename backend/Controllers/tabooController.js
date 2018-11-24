const Taboo = require('../Models/TaboosModel');

// Display a list of Taboo words
exports.taboo_list = (req, res) => {
	Taboo.find((err, words) => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success: true, data: words});	
	});
};

// Create a Taboo word
exports.new_word = (req, res) => {
	const word = req.params.word.toLowerCase(); 
	const newword = new Taboo({word: word});

	newword.save(err => {
		if (err)
			return res.json({success: false, error: err});
		return res.json({success: true, message: "Taboo word Successfully Added."});
	});
};

// Search a Taboo word
exports.search_word = (req, res) => {
	const word = req.params.word.toLowerCase();
	const query = Taboo.where({word: word});

	query.findOne((err, word) => {
		if (err)
			return res.json({success: false, error: err});

		if (word)
			return res.json({success: true, message: "Word found."});
		return res.json({success: false, message: "Word not found."});
	});
};

// Delete a Taboo word
exports.delete_word = (req, res) => {
	const word = req.params.word.toLowerCase();
	const query = Taboo.where({word: word.toLowerCase()});

	query.findOneAndDelete((err,word) => {
		if (err)
			return res.json({success: false, error: err})
		if (word)
			return res.json({success: true, message:"Word deleted."})
		return res.json({success: false, message: "Word not found."})
	});
};