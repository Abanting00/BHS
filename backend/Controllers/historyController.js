const History = require('../Models/HistoryModel');

// new version
exports.new_version = (req,res) => {
	const{version, document, modified_by, date_modified} = req.body;
	const newversion = new History({
		version: version,
		document: document,
		modified_by: modified_by,
		date_modified: date_modified
	});

	newversion.save(err => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success:true});
	}); 
};

// display all versions
exports.version_history = (req,res) => {
	History.find((err, history) => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true, data: history});
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