const express = require('express');
const router = express.Router();

// Load User Controller
const UserController = require('../Controllers/userController');

// Return all Users
router.get('/users', UserController.user_list);

// Get user by username
router.get('/user/:name', UserController.user_by_username);

// Login a User by username and password 
router.post('/login', UserController.user_login);

// Register a new User 
router.post('/register', UserController.new_user);

// Update user role, takes in their username and role privelige
router.put('/user/updateRole', UserController.user_update_role);

// Update user photo
router.put('/user/:username/updatePhoto', UserController.user_update_img);

// Delete a user in the database based on their username
router.delete('/user/remove', UserController.user_delete);

module.exports = router;