const express = require('express');
const router = express.Router();

const docController = require('../Controllers/docController');

// create new document
router.post('/docs',docController.new_doc);

// return all documents
router.get('/docs',docController.doc_list);

// return current document status
router.get('/docs/status/:id',docController.status);

// return document owner
router.get('/docs/owner/:id',docController.get_owner);

//change current document status
router.put('/docs/changestatus/:id',docController.change_status);

//increase views by one
router.put('/docs/incviews/:id',docController.inc_views);

module.exports = router;