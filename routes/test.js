const express = require('express');
const router = express.Router();
const DataController = require('../Controllers/DataController');
const UsersController = require('../Controllers/UserController');


exports.getRoute = router.get('/getAllSurveys',DataController.getData);
exports.getUser = router.get('/getuser/:id/:pass',UsersController.getUser);

