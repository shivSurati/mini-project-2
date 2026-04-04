//DUMMY API!!!!
const express = require("express");
const router = express.Router();
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

router.post("/create", async (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findOne({
      _id: decoded.id,
    });
    console.log(user);
  } catch (error) {
    res.status(401).json({
      message: "Token is invalid!",
    });
  }

  res.send("Post created successfully!");
});

module.exports = router;
