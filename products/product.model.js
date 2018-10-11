const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    imgName: { type: String, required: true },
    imgBase64Data: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);