const todo = require('./../models/todo');

module.exports = {

    index (req, res) {
        res.end('Got into home route');
    },

    create (req, res) {
        const data = req.body;
        todo.insertMany(data)
            .then(data => res.json(data))
            .catch(err => res.end(err));
    }
}