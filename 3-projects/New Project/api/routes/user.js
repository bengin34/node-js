const express = require("express");
const router = express.Router();
const User = require("../models/User.js");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken.js");

router.get("/", verifyAdmin, async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", verifyUser, async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", verifyUser, async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", verifyUser, async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
