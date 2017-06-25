const express = require('express');

const router = express.Router();

const todo = require('./../controllers/todo');

router.get('/', todo.index);

module.exports = router;