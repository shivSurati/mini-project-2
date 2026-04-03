const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.post("/register", authController.registerUser);

router.get("/test", (req, res) => {
  console.log("Cookies:", req.cookies);
  res.json({
    message: "Test route",
    cookie: req.cookies,
  });
});
module.exports = router;
