
const user = require('./../../app/models/user');
const userController = require('./../../app/controller/userController');
const express = require('express');
const router = express.Router();
router.get('/',userController.getData);
router.post('/userName',userController.sendData);
router.delete('/userName1/:id',userController.deleteData);
module.exports = router;


