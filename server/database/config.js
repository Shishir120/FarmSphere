require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const url = process.env.MONGO_URI;
    if (!url) {
      throw new Error("MONGO_URI is missing. Create server/.env using server/.env.example and set your MongoDB connection string.");
    }
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    throw new Error("Could not connect to MongoDB. Check MONGO_URI and database availability.", { cause: error });
  }
};

module.exports = dbConnect;
