const express = require('express');
const router = express.Router();
const OfficialController = require('../controller/OfficialController');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

router.post('/create', OfficialController.AddOfficial)

module.exports = router
