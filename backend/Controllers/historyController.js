const History = require('../Models/HistoryModel');

// new version
exports.new_version = (req,res) => {
	const doc = res.locals.doc;

	const newversion = new History({
		version: doc.version - 1,
		doc_id: doc._id,
		body: doc.body,
		modified_by: doc.modified_by,
		date_modified: Date.now()
	});

	newversion.save(err => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success:true});
	}); 
};

exports.doc_history_list = (req,res) => {
	History.find({doc_id: req.params.doc_id}, (err, histories) =>{
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true, data: histories});
	})
}

exports.history_list = (req,res) => {
	History.find((err,histories) => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true, data: histories});
	});
}

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

