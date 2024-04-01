const express = require('express');
const router = express.Router();
const OfficialController = require('../controller/OfficialController');

router.post('/create', OfficialController.AddOfficial)

module.exports = router
