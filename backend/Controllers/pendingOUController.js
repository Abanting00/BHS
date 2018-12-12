const PendingOU = require('../Models/PendingOUModel');

exports.pending_list = (req, res) => { 
	PendingOU.find((err, guests) => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success: true, data: guests});
	});
};

exports.add_guest = (req, res) => {
	const new_guest = new PendingOU({guest: req.params.guest});

	new_guest.save(err => {
		if(err)
			return res.json({success: false, error: err});
		return res.json({success: true, data:new_guest, message: "Guest User successfully added."})
	});
}

exports.delete_guest = (req, res) => {
	const query = PendingOU.where({guest: req.params.guest})

	query.findOneAndDelete((err,word) => {
		if(err)
			return res.json({success: false, error: err})
		if(req.params.guest)
			return res.json({success: true, message:"Guest User removed from list."})
		return res.json({success: false, message: "Guest User not found."})
	})
}