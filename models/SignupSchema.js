import mongoose from "mongoose";

const SignupSchema = mongoose.Schema(
  {
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    DOB: { type: Date, required: true },
    gender: { type: String, required: true },
  },
  { timestamps: true }
);
mongoose.models = {};
module.exports = mongoose.model("Signup", SignupSchema);
