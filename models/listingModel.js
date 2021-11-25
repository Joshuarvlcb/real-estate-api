const mongoose = require("mongoose");
const ListingSchema = new mongoose.Schema({
  // "postal_code": "95864",
  // "state": "California",
  // "coordinate": {
  //   "lon": -121.393959,
  //   "lat": 38.582519
  // },
  // "city": "Sacramento",
  // "state_code": "CA",
  // "address": "2900 Sienna Ln",
  // "status": "for sale",
  // "price": 939000,
  // "list_date": "2021-11-05T07:38:23Z"
  postal_code: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "for sale",
  },
  price: {
    type: Number,
    required: true,
  },
  list_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Listing", ListingSchema);
