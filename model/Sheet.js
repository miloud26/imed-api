const mongoose = require("mongoose");

const SheetSchema = new mongoose.Schema({
  sheet: String,
});

module.exports = mongoose.model("Sheet", SheetSchema);
