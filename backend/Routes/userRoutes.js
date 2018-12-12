const express = require('express');
const router = express.Router();

// Load User Controller
const UserController = require('../Controllers/userController');

// Return all Users
router.get('/users', UserController.user_list);

// Get user by username
router.get('/user/:name', UserController.user_by_username);

// Get user by id
router.get('/user/findbyid/:id',UserController.user_by_id);

// Login a User by username and password 
router.post('/login', UserController.user_login);

// Register a new User 
router.post('/register', UserController.new_user);

// Update user role, takes in their username and role privelige
router.put('/user/updateRole', UserController.user_update_role);

// Update user photo
router.put('/user/:username/updatePhoto', UserController.user_update_img);

// Update user interests
router.put('/user/updateInterests', UserController.user_update_interests);

// Delete a user in the database based on their username
router.delete('/user/remove', UserController.user_delete);

// Add New Pending Invite
router.put('/invite/:userid/doc/:docid', UserController.new_invite);

// Delete an Invite
router.delete('/invite/:userid/doc/:docid', UserController.remove_invite);

// Add New Pending Complaint
router.put('/complaint/:ownerid/user/:userid', UserController.new_complaints);

// Delete Complaints
router.delete('/complaint/:ownerid/user/:userid', UserController.remove_complaints);

// Get Invite List
router.get('/invite/:userid', UserController.invite_list);

// Get Complaint_list
router.get('/complaint/:userid', UserController.complaint_list);

module.exports = router;