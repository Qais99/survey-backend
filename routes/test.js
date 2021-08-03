const express = require('express');
const router = express.Router();
const DataController = require('../Controllers/DataController');
const UsersController = require('../Controllers/UserController');


router.get('/getAllSurveys',DataController.getData);
router.get('/getuser/:id/:pass',UsersController.getUser);
router.get('/createuser/:name/:pass',UsersController.createuser);

module.exports = router;

