const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: String,
  titleFr: String,
  titleAr: String,
  descFr: String,
  descAr: String,
  img: String,
  category: String,
  price: String,
  metaTitle: String,
  metaDesc: String,
});

module.exports = mongoose.model("Product", ProductSchema);
