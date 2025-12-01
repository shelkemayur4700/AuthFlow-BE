const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("database connected sucessfully!");
  await mongoose.connect(process.env.DATABASE_URL);
};

module.exports = connectDB;
