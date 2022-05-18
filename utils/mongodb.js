const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    console.log("already connected");
    // Use current db connection
    return handler(req, res);
  }
  console.log("new conection");
  // Use new db connection
  await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;
