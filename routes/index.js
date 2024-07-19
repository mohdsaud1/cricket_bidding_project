const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Home route
router.get('/', dataController.getHomePage);

// Fetch all data
// router.get('/data', dataController.getAllData);

// Handle form submission
router.post('/submit-data', dataController.submitData);

router.get('/display-data', dataController.getAllData);

module.exports = router;