const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  postalCode: String,
  country: String,
});

module.exports = mongoose.model("Address", AddressSchema);
