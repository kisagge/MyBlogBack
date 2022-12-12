const express = require("express");
const { login, signUp } = require("../controllers/userController");

const router = express.Router();

// login
router.post("/login", login);

// sign up
router.post("/sign-up", signUp);

module.exports = router;
