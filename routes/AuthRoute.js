const express = require('express');
const router = express.Router();
const AuthController = require('../controller/AuthController');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

// TODO: Add admin routes.

// Change this name to something better
router.post('/create', AuthController.addAdmin)

router.post('/login', AuthController.login)


module.exports = router
