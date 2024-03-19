const express = require('express')
const AppController = require('../controllers/AppController')

// declare router
const router = express.Router();

// accessing endpoints

router.get('/status', AppController.getStatus)
router.get('/stats', AppController.getStats)

module.exports = router;
