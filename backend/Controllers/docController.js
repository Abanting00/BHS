const Doc = require('../Models/DocsModel');
const User = require('../Models/UsersModel');

// Create a new Document
exports.new_doc = (req,res) =>{

	const{title,description,body,is_locked,permission,owner} = req.body;
	const newdoc = new Doc({
		title:title,
		description:description,
		body:body,
		locked_by: owner,
		is_locked:is_locked,
		permission:permission,
		owner:owner
	});

	newdoc.save(err => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true, data: newdoc});
	});
};

// Get all documents
exports.doc_list = (req,res) => {
	Doc.find((err,docs) => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true, data: docs});
	});
};

// Get a single document
exports.get_doc = (req,res) => {
	Doc.findById(req.params.id, (err,docs) => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true, data:docs});
	});
};

// Get document status
exports.status = (req,res) => {
	Doc.findById(req.params.id,'is_locked',
		(err, docs) => { 
			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true, is_locked:docs.is_locked});
		});
};

// Get body
exports.get_body = (req,res) => {
	Doc.findById(req.params.id,'body',
		(err, docs) => { 
			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true, body:docs.body});
		});
};

//Change Document Status (locked/unlocked)
exports.change_status = (req,res) => {
 	Doc.findById(req.params.id,(err,docs) => {
 		if(err)
 			return res.json({success:false, error:err});
 		docs.is_locked = !(docs.is_locked);
 		docs.locked_by = req.params.userid

 		docs.save(err => {
 			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true});
		});
 	});
};

// Get users in memberlist of doc
exports.member_list = (req,res) => {
	Doc.findById(req.params.id,(err,doc) => {
		if(err)
			return res.json({success:false, error:err, data:[]})

		User.find({'_id': {$in: doc.members}}, (err,users) => {
			if(err)
				return res.json({success:false, error:err, data:[]});
			return res.json({success:true, data:users});
		});
	});
}

// Add member in a document
exports.add_member = (req,res) => {
	Doc.findById(req.params.id,(err,doc) => {
		if(err)
			return res.json({success:false, error:err})
		
		const query = User.where({username: req.params.name})

		query.findOne((err, user) => {
			if (err) 
				return res.json({success: false, error: err})
			
			doc.members.push(user.id);
			doc.save(err => {
				if(err)
					return res.json({success:false, error:err})
				return res.json({success:true, message: "Successfully Added New Member."})
			});
		})
	})	
}

// Remove member in a document
exports.remove_member = (req,res) => {
	Doc.findByIdAndUpdate(req.params.docid,
		{ $pull: {'members': req.params.userid }}, (err,user) =>{
			if(err)
				return res.json({success:false, error:err})
			return res.json({success:true, message: "Removed User as Member."});
		})
}

//Change the body
exports.change_body = (req,res,next) => {
	Doc.findById(req.params.id,(err,docs) => {
		if(err)
			return res.json({success:false, error:err});
		
		const oldDoc = {
			body: docs.body,
			_id: docs._id,
			version: docs.version,
			modified_by: req.body.modified_by
		}

		docs.version++;
		docs.body = req.body.body; 
		docs.modified = Date.now();

		docs.save(err => {
			if(err)
				return res.json({success:false, error:err});
			res.locals.doc = oldDoc
			next();
		});
	});
};

// Get the owner of a document 
exports.get_owner = (req,res) => {
	Doc.findById(req.params.id,'owner',
		(err, docs) => {
			if(err)
				return res.json({success:false, error:err})
			return res.json({success:true, owner:docs.owner});
		});
};

// Increase views
exports.inc_views = (req,res) => {
 	Doc.findById(req.params.id,(err,docs) => {
 		if(err)
 			return res.json({success:false, error:err});
 		docs.views++;

 		docs.save(err => {
 			if(err)
 				return res.json({success:false, error:err});
 			return res.json({success:true});
 		});
 	});
};

// Delete document
exports.doc_delete = (req,res) => {
	Doc.findByIdAndRemove(req.params.id,(err,docs) => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true});
	});
};
