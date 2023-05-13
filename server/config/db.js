const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_DB_URI = process.env.MONGO_DB_URI;

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(MONGO_DB_URI);
    console.log(
      `Mongo DB connected ${connect.connection.host}.`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
