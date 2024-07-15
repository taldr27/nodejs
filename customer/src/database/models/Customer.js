const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  name: String,
  email: String,
  password: String,
  salt: String,
  phone: String,
  address: [
    {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  ],
  cart: [
    {
      product: {
        _id: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        banner: {
          type: String,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  wishlist: [
    {
      _id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      banner: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      available: {
        type: Boolean,
        required: true,
      },
    },
  ],
  orders: [
    {
      _id: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now(),
        required: true,
      },
    },
  ],
});
