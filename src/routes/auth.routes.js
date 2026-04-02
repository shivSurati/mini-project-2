const express = require("express");
const router = express.Router;

router.post((res, req) => {
  const { username, email, password } = req.body;
});

module.exports = router;
