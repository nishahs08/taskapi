const router = require('./../config/routes/userRoutes');
const express = require('express');
const users = require('./models/user');
const app = express();
var mongoose = require('mongoose');
var mongoose = require('mongoose');

var bodyParser = require('body-parser');


mongoose.connect('mongodb://127.0.0.1/myapp');
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

console.log('1 entry');
mongoose.model('users',{name : String});


app.use('/',router);
console.log('2 entry');




module.exports = app;

