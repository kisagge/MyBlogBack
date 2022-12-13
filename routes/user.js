const express = require("express");
const {
  login,
  signUp,
  ensureAuthorized,
  userInfo,
} = require("../controllers/userController");

const router = express.Router();

// login
router.post("/login", login);

// sign up
router.post("/sign-up", signUp);

// info
router.post("/info", ensureAuthorized, userInfo);

module.exports = router;
