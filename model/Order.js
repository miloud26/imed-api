const mongoose = require("mongoose");

const PixelSchema = new mongoose.Schema({
  unique: String,
  name: String,
  number: String,
  wilaya: String,
  adress: String,
  product: String,
});

module.exports = mongoose.model("Order", PixelSchema);
