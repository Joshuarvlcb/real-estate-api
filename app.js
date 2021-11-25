//how this works
require("express-async-errors");
require("dotenv").config();
require("./populate");
//app
const express = require("express");
const app = express();
const mongoDB = require("./db/connect");

//routes
const authRoutes = require("./routes/auth");
const agentRoutes = require("./routes/agent");
//security

//middlware
//how this works
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const auth = require("./middleware/auth");

//what is urlencoded and json
app.use([express.urlencoded({ extended: false }), express.json()]);
//how does this work
app.use("/v1/auth", authRoutes);
app.use("/v1/agent", auth, agentRoutes).use(errorHandler).use(notFound);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await mongoDB(process.env.MONGO_URL);
    app.listen(3000, () => {
      console.log(`listening at port ${port}`);
    });
  } catch (err) {
    console.log("err in server" + " " + err);
  }
};
start();
