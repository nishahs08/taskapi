const express = require('express');

const app = express();

require('./../config/server')(app);
require('./../config/database')();

module.exports = app;