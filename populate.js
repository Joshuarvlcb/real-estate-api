require("dotenv");
const connectDB = require("./db/connect");
const Listing = require("./models/listingModel");
const json = require("./houses.json");
const populate = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Listing.deleteMany({});
    await Listing.create(json);
  } catch (err) {
    console.log("could not populate");
  }
};
