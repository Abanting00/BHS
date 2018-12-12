const express = require('express');
const router = express.Router();

const PendingTabooController = require('../Controllers/pendingTabooController');

// Get a list of Taboo words
router.get('/pendingwords', PendingTabooController.pending_list);

// Create a new Taboo word
router.post('/pendingwords/:word', PendingTabooController.add_word);

// Delete a taboo word
router.delete('/pendingwords/:word', PendingTabooController.delete_word);

module.exports = router;