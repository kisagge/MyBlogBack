const User = require("../models/userModel");

// sign up
const signUp = async (req, res) => {
  const { userId, password } = req.body;

  try {
    const user = await User.create({
      userId: userId,
      password: password,
    });

    return res.status(200).json({ result: true, error: null, data: null });
  } catch (err) {
    return res
      .status(400)
      .json({ result: false, error: "Failed to sign up", data: null });
  }
};

// login
const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findOne({
      userId: req.body.userId,
    });

    if (!user) {
      return res
        .status(401)
        .json({ result: false, error: "Not exist id", data: null });
    }

    const isMatched = await user.comparePassword(req.body.password);

    if (!isMatched) {
      return res
        .status(401)
        .json({ result: false, error: "Wrong password", data: null });
    }

    // create jwt
    const genToken = await user.generateToken();
    console.log(genToken);
    if (genToken) {
      return res.status(200).json({
        result: true,
        error: null,
        data: {
          token: genToken.token,
        },
      });
    } else {
      return res
        .status(401)
        .json({ result: false, error: "Failed to login", data: null });
    }
  } catch (err) {
    res
      .status(401)
      .json({ result: false, error: "Failed to login", data: null });
  }
};

module.exports = {
  login,
  signUp,
};
