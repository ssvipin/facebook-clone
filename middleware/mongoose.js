import mongoose from "mongoose";

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect("mongodb+srv://kumarvipin24031999:Vipin001@cluster0.9mvpww9.mongodb.net/?retryWrites=true&w=majority");
  return handler(req, res);
};

export default connectDb;
