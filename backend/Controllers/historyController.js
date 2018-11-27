const History = require('../Models/HistoryModel');

// new version
exports.new_version = (req,res) => {
	const{version, doc_id, body, modified_by} = req.body;
	const newversion = new History({
		version: version,
		doc_id: doc_id,
		body: body,
		modified_by: modified_by,
		date_modified: Date.now
	});

	newversion.save(err => {
		if(err)
			return ress.json({success: false, error: err});
		return res.json({success:true});
	}); 
};

// display version history for a single document
exports.version_history = (req,res) => {
	const doc_id = req.params.doc_id;
	const query = History.where({doc_id: doc_id});

	query.findOne((err,history) => {
		if (err)
			return res.json({success: false, error: err}); 
		return res.json({success: true, history: history});
	});
};

// display specific version
exports.get_version = (req,res) => {
	History.findById(req.params.id, (err,history) => {
		if(err)
			return res.json({success:false, error: err});
		return res.json({success:true, data: history});
	});
};

