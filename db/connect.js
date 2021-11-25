const mongoose = require("mongoose");

const connect = (url) => {
  try {
    mongoose.connect(url);
    console.log("connected to db");
  } catch (err) {
    console.log("err in db" + " " + err);
    throw err;
  }
};

module.exports = connect;
