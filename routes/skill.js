const express = require("express");
const { addSkill } = require("../controllers/skillController");

const router = express.Router();

// add skill
router.post("/add", addSkill);

module.exports = router;
