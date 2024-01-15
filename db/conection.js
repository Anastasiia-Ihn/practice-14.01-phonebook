const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const mongoConect = async () => {
  try {
    await mongoose.connect(DB_HOST);
    console.log("port 8000");
  } catch (error) {
    console.log("problem with connection");
  }
};

module.exports = mongoConect;
