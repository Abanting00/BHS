const express = require('express');
const router = express.Router()
const pmController = require('../Controllers/pmController.js');

// Create a new pm 
router.post('/pms',pmController.new_pm);

// return pm list
router.get('/pms',pmController.pm_list);

// return specific pm with id
router.get('/pms/:id',pmController.get_pm);

// return message of the pm
router.get('/pms/:id',pmController.get_message);

// change viewed 
router.put('/pms/:id',pmController.change_viewed);

// return view status
router.get('/pms/:id',pmController.get_viewed);

// return sender of message
router.get('/pms/:id',pmController.get_owner );

// delete message
router.delete('/pms/:id',pmController.delete_pm);

module.exports = router;
