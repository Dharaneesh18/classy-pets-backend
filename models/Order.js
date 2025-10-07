const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [{ 
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    name: String,
    price: mongoose.Schema.Types.Mixed,
    quantity: Number
  }],
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
