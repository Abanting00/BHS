const express = require('express');
const router = express.Router();

const historyController = require('../Controllers/historyController');

// create new version
router.post('/history', historyController.new_version);

// get version history
router.get('/history', historyController.version_history);

// get specific version
router.get('/history/:id', historyController.get_version);
module.exports = router;