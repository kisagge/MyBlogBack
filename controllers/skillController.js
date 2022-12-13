const Skill = require("../models/skillModel");

// get skills
const skillList = async (req, res) => {};

// add skill
const addSkill = async (req, res) => {
  try {
    console.log(req.body.skillName);
    const skill = await Skill.create({
      skillName: req.body.skillName,
    });

    return res.status(200).json({ result: true, error: null, data: skill });
  } catch (err) {
    return res.status(400).json({
      result: false,
      error: err,
      data: null,
    });
  }
};

module.exports = {
  addSkill,
};
