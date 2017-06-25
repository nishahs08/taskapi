const bodyParser = require('body-parser');
const router = require('./router');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('', router);
}