// const todo = require('./../models/todo');

module.exports = {

    index (req, res) {
        console.log(req.ip)
        res.end(req.ip)
        /*todo.find({})
            .then(data => res.json(data))
            .catch(err => res.end(err));*/
    },

    create (req, res) {
        const data = req.body;
        todo.insertMany(data)
            .then(data => res.json(data))
            .catch(err => res.end(err));
    },

    update (req, res) {
        const data = req.body;
        
        todo.findById(req.params.todoId)
            .then(todoDoc => {
                
                for (let key in data)
                    if ('undefined' !== typeof todoDoc[key]) 
                        todoDoc[key] = data[key];

                todoDoc.save()
                    .then(data => res.json(data));
            })
            .catch(err => res.end(err));
    },

    delete (req, res) {

        todo.findByIdAndRemove(req.params.todoId)
            .then(data => res.json(data))
            .catch(err => res.end(err))
    }
}