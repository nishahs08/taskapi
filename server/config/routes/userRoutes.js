
const user = require('./../../app/models/user');
const userController = require('./../../app/controller/userController');
const express = require('express');
const router = express.Router();
router.get('/',userController.getData);
router.post('/userName',userController.sendData);

module.exports = router;