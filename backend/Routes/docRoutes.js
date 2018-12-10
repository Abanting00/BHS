const express = require('express');
const router = express.Router();

const docController = require('../Controllers/docController');
const historyController = require('../Controllers/historyController');

// create new document
router.post('/docs',docController.new_doc);

// return all documents
router.get('/docs',docController.doc_list);

// return a single document by id
router.get('/docs/:id',docController.get_doc);

// return current document status
router.get('/docs/status/:id',docController.status);

// return document body using document id
router.get('/docs/body/:id',docController.get_body);

// returns member list using document id
router.get('/docs/members/:id',docController.member_list);

// update body of a document
router.put('/docs/body/:id',docController.change_body, historyController.new_version);

// return document owner
router.get('/docs/owner/:id',docController.get_owner);

// change current document status
router.put('/docs/changestatus/:id',docController.change_status);

// increase views by one
router.put('/docs/incviews/:id',docController.inc_views);

// delete document using id
router.delete('/docs/remove/:id',docController.doc_delete);

// add new member to document
router.put('/docs/:id/addmember/:userid',docController.add_member);
module.exports = router;