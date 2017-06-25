const express = require('express');

const router = express.Router();

const todo = require('./../controllers/todo');

router.get('/', todo.index);
router.post('/todos', todo.create);

module.exports = router;