import connectDb from "../../../middleware/mongoose";
import SignupSchema from "../../../models/SignupSchema";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
async function handler(req, res) {
  if (req.method === "POST") {
    let user = await SignupSchema.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "VIP123");
    let decryptedPass = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    if (user) {
      if (
        req.body.email === user.email &&
        req.body.password === decryptedPass.toString()
      ) {
        var token = jwt.sign({ success: true, user }, "VIP123", {
          expiresIn: "2d",
        });
        res.status(200).json({ token });
      } else {
        res.status(200).json({ success: false, error: "Invalid Crredentials" });
      }
    } else {
      res.status(200).json({ success: false, error: "No user found" });
    }
  }
}
export default connectDb(handler);
