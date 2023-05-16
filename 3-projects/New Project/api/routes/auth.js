const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User.js");
const createError = require("../utils/error.js");
const jwt = require('jsonwebtoken');

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
      if (!user) {
          return next(createError(404, "User not found"));
      }
      const isPaswordValid = await bcrypt.compare(password, user.password);
      if (!isPaswordValid) {
          return next(createError(401, "Password is not correct"));
      }

      const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT
      );
        console.log(token)
      const { password: userPassword, isAdmin, ...otherDetail } = user._doc;

      res.cookie("access_token", token, {
          httpOnly: true,
      })
          .status(200)
          .json({ success: true, data: otherDetail });
  } catch (error) {
      next(error);
  }
});

module.exports = router;
