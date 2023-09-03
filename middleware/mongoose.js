import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect("mongodb://localhost:27017/fb-clone");
  return handler(req, res);
};

export default connectDb;
