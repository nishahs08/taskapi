const express = require('express');

const router = express.Router();

const todo = require('./../controllers/todo');

router.get('/todos', todo.index);
router.post('/todos', todo.create);
router.put('/todo/:todoId', todo.update);
router.delete('/todo/:todoId', todo.delete);

module.exports = router;