const Doc = require('../Models/DocsModel');

// Create a new Document
exports.new_doc = (req,res) =>{

	const{title,description,body,is_locked,permission,owner} = req.body;
	const newdoc = new Doc({
		title:title,
		description:description,
		body:body,
		is_locked:is_locked,
		permission:permission,
		owner:owner
	});

	newdoc.save(err => {
		if(err)
			return res.json({success:false, error:err});
		return res.json({success:true});
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
 		
 		docs.save(err => {
 			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true});
		});
 	});
};

//Change the body
exports.change_body = (req,res) => {
	Doc.findById(req.params.id,(err,docs) => {
		if(err)
			return res.json({success:false, error:err});
		docs.version++;
		docs.body = req.body.body; 

		docs.save(err => {
			if(err)
				return res.json({success:false, error:err});
			return res.json({success:true});
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
