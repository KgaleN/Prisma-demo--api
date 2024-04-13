const express = require('express');
const router = express.Router();
const AdminController = require('../controller/AdminController');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

// TODO: Add admin routes.

router.post('/create', AdminController.AddAdmin)

router.get('/index', AdminController.DisplayListOfAdmins)

module.exports = router
