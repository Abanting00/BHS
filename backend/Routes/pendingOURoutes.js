const express = require('express');
const router = express.Router();

const PendingOUController = require('../Controllers/PendingOUController');

//Get a list of pending OU
router.get('/pendingOU', PendingOUController.pending_list);

// Add a new guest user to pending OU
router.post('/pendingOU/:guest', PendingOUController.add_guest);

// Remove a guest user from pending OU list
router.delete('/pendingOU/:guest', PendingOUController.delete_guest);

module.exports = router;