const mongoose = require('mongoose');

module.exports = () => {

    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb://127.0.0.1/myapp');

    mongoose.connection.on('connected', function () {
        console.log('Connected');
    })
}