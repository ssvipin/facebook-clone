const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    password: { type: stringify, required: true },
  },
  { timestamps: true }
);
mongoose.Schema = {};
export default mongoose.model("login", loginSchema);
