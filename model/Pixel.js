const mongoose = require("mongoose");

const PixelSchema = new mongoose.Schema({
  pixel: String,
});

module.exports = mongoose.model("Pixel", PixelSchema);
