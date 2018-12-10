const express = require('express');
const router = express.Router();

const historyController = require('../Controllers/historyController');

// return all available document histories
router.get('/history', historyController.history_list);

// return all document history by doc_id
router.get('/history/:doc_id', historyController.doc_history_list);

// create new version
router.post('/history', historyController.new_version);

// get version history
router.get('/history/:doc_id', historyController.version_history);

// get specific version
router.get('/history/:id', historyController.get_version);
module.exports = router;