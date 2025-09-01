const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wandurlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main().then(() => {
  //calling main function {jo niche }
  console.log("connected to DB");
});

const initDB = async () => {
  await Listing.deleteMany({}); //phale jo data hain database mein usko clean kar rahe abb uske data add hoga.{mtlb jo practise kaer rahe tha na }.
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68aaba42a5a7194c97285332",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
