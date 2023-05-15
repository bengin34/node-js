const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const createError = require("../utils/error.js");

router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hash = await bcrypt.hash(password, 11);
    const newUser = new User({
      username,
      email,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({ success: true, msg: "Registration successful" });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) return next(createError(404, "User not found"));

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return next(createError(400, "wrong password"));

    const { password: uPassword, isAdmin, ...otherDetails } = user._doc;
    res.status(200).json({ success: true, data: otherDetails });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
