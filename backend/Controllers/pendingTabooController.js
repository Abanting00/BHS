const PendingTaboo = require('../Models/PendingTabooModel');

exports.pending_list = (req, res) => {
	PendingTaboo.find((err, words) => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success: true, data: words});	
	});
};

exports.add_word = (req, res) => {
	const word = req.params.word.toLowerCase();
	const newword = new PendingTaboo({word: word});

	newword.save(err => {
		if (err)
			return res.json({success: false, error: err});
		return res.json({success: true, message: "Taboo word Successfully Added."});
	});
}

exports.delete_word = (req, res) => {
	const word = req.params.word.toLowerCase();
	const query = PendingTaboo.where({word: word.toLowerCase()});

	query.findOneAndDelete((err,word) => {
		if (err)
			return res.json({success: false, error: err})
		if (word)
			return res.json({success: true, message:"Word deleted."})
		return res.json({success: false, message: "Word not found."})
	});
};
