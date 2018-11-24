const express = require('express');
const router = express.Router();

// Load Taboo Controller
const TabooController = require('../Controllers/tabooController');

// Get a list of Taboo words
router.get('/words', TabooController.taboo_list);

// Search a word if its in the taboo list
router.get('/words/:word', TabooController.search_word);

// Create a new Taboo word
router.post('/words/:word', TabooController.new_word);

// Delete a taboo word
router.delete('/words/:word', TabooController.delete_word);

module.exports = router;