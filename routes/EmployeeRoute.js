const express = require('express');
const router = express.Router();
const EmployeeController = require('../controller/EmployeeController');

router.post('/create', EmployeeController.AddEmployee)

router.get('/index', EmployeeController.DisplayListOfEmployees)

module.exports = router
