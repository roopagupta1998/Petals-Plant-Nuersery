const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: String,
  productId: String,
  quantity: Number
});

module.exports = mongoose.model('Cart', cartSchema);
