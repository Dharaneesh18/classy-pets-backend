const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Mixed, required: true }, // can be number or array
  image: { type: String, default: "" } // optional, you can add image URLs
});

module.exports = mongoose.model("Product", ProductSchema);
