const mongoose = require('mongoose');

module.exports = () => {

    mongoose.Promise = global.Promise;

    mongoose.connect('mongodb:127.0.0.1:27017/myapp', function () {
        console.log('Connection established');
    })
}