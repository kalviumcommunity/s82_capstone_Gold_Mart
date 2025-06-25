const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/user");

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const token = crypto.randomBytes(20).toString("hex");
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 3600000; // 1 hour
  await user.save();

  const resetLink = `http://localhost:3000/reset-password/${token}`;
  exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() }
  });

  if (!user) return res.status(400).json({ message: "Invalid or expired token" });

  user.password = newPassword; // 🔐 Hash this with bcrypt ideally
  user.resetToken = undefined;
  user.resetTokenExpiry = undefined;
  await user.save();

  res.json({ message: "Password reset successful" });
};


  // Configure the email transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-app-password"
    }
  });

  // Send email
  const mailOptions = {
    to: user.email,
    from: "your-email@gmail.com",
    subject: "Password Reset - GoldMart",
    html: `<p>Click the link below to reset your password:</p><a href="${resetLink}">${resetLink}</a>`
  };

  await transporter.sendMail(mailOptions);
  res.json({ message: "Reset link sent to your email" });
};
