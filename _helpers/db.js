const config = require('config.json');
const mongoose = require('mongoose');
//mongoose.connect(config.connectionString);
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Product: require('../products/product.model')
};