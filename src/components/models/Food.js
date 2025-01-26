const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  foodType: { type: String, required: true },
  quantity: { type: String, required: true },
  expirationDate: { type: String, required: true },
});

module.exports = mongoose.model("Food", foodSchema);
