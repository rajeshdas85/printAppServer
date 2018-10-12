const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
//console.log(config.connectionString);
//mongoose.connect('mongodb://printapp:print123@ds129321.mlab.com:29321/printappdb');
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Product: require('../products/product.model')
};