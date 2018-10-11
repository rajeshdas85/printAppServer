const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Product = db.Product;

module.exports = {
    addProduct,
    getAllProducts,
    deleteProduct,
    getProductById
};

async function addProduct(productParam) {
    const product = new Product(productParam);
    // save product
    await product.save();
}

async function getAllProducts() {
    return await Product.find();
}

async function deleteProduct(id) {
    await Product.findByIdAndRemove(id);
}

async function getProductById(id) {
    return await Product.findById(id);
}