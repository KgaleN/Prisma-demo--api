const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/EmployeeController');
const helmet = require('helmet');
const morgan = require('morgan');

router.use(helmet());
router.use(morgan('dev'));

router.post('/create', EmployeeController.AddEmployee)

router.get('/index', EmployeeController.DisplayListOfEmployees)

module.exports = router
