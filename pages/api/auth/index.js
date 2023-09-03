import connectDb from "../../../middleware/mongoose";
import SignupSchema from "../../../models/SignupSchema";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
async function handler(req, res) {
  if (req.method === "POST") {
    let isUserExists = await SignupSchema.findOne({
      email: req.body.email,
    });
    if (isUserExists) {
      res.status(200).json({
        status: "failed",
        error: "User already exists",
      });
    } else {
      let token = jwt.sign(
        {
          email: req.body.email,
          password: CryptoJS.AES.encrypt(
            req.body.password,
            "VIP123"
          ).toString(),
        },
        "VIP123",
        { expiresIn: "2d" }
      );
      let user = new SignupSchema({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, "VIP123").toString(),
        DOB: req.body.DOB,
        gender: req.body.gender,
        token: token,
      });
      await user.save();

      res.status(200).json({ success: true, token });
    }
  }
}
export default connectDb(handler);
