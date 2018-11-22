const express = require('express');
const router = express.Router();

// Load 
const UserController = require('../Controllers/UserController');


router.get('/users', UserController.user_list);

router.post('/users', UserController.new_user);

module.exports = router;