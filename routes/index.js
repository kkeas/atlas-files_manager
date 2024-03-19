const express = require('express')
const AppController = require(/controllers/AppController)

// declare router
const router = express.Router();

// accessing endpoints

Router.get('/status', AppController.getStatus)
Router.get('/stats', AppController.getStats)

module.exports = router;
