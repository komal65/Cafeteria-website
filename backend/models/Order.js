const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: String,
  customerEmail: String,
  items: [
    {
      _id: false, // Exclude _id for items
      name: String,
      description: String,
      price: Number,
      quantity: Number,
    },
  ],
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
