const Pm = require('../Models/PmModel');
//private-message API 

/*
 *TO-DO*
1.go over syntax
*/


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

	newpm.save(err => {
		if(err)
			return res.json({success:false,error:err});
		return res.json({success:true});
	});
};


// pm list
exports.pm_list = (req,res) => {
	Pm.findById(req.params.id,(err,pm) => {
		if(err)
				return res.json({sucess:false, error: err});
		return res.json({success:true, data: pm})
	});
};

//retrieve specific pm
exports.get_pm = (req,res) => {
	Pm.find(req.params.id,(err,pm) => {
		if(err)
				return res.json({sucess:false, error: err});
		return res.json({success:true, data: pm})
	});
};

//retrieve the message of pm
exports.get_message = (req,res) =>{
	Pm.findById(req.params.id,'message',
		(err,pm) => {
			if(err)
				return res.json(success:false, error:err);
			return res.json(success:true, message: pm.message);

		});
};

//change the view status to true
exports.change_viewed = (req,res) => {
	Pm.findById(req.params.id,'viewed',
		(err,pm) => {
			if(err)
				return(success:false,error:err);
			pm.viewed=true;
			pm.save(err => {
				if(err)
					return res.json({success:false,error:err});
				return res.json({success:true});
			});
		});
};

//retrieve view status
exports.get_viewed = (req, res) => {
	Pm.findById(req.params.id,'viewed',
		(err,pm) => {
			if(err)
				return res.json(success:false, error: err);
			return(success:true, viewed:pm.viewed);

		});
};


//view sender of the message 
exports.view_owner = (req,res) => {
	Pm.findById(req.params.id,'sender',
		(err,pm) => {
			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true, sender:pm.sender})
		});
};
