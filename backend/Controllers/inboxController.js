const Inbox = require('../Models/InboxModel');
//Inbox API 

// Create a private message

exports.new_pm = (req,res) => {
	const(subject, message, recipient, sender, sent_date, viewed) = req.body;
	const newpm = new Pm ({
		subject:subject,
		message:message,
		recipient:recipient,
		sender:sender,
		sent_date:sent_date,
		viewed:viewed
	});
};


// pm list

exports.pm_list = (req,res) => {
	Pm.findById(req.params.id,(err,pm)) => {
		if(err)
				return res.json({sucess:false, error: err});
		return res.json({success:true, data: inbox})
	};
};

//retrieve specific pm
exports.get_pm = (req,res) => {
	Pm.find(req.params.id,(err,pm)) => {
		if(err)
				return res.json({sucess:false, error: err});
		return res.json({success:true, data: pm})
	};
};

//change the view status to true
exports.viewed = (req,res) =>> {
	Pm.findById(req.params.id,(err,'viewed')) => {
		if(err)
				return res.json({sucess:false, error: err});
		return res.json({success:true, data: pm})
	};
};

