const User = require("../db/models/UserModel");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const { SECRET_KEY } = process.env;

const singup = async (req, res, next) => {
  try {
    const { name, email, password } = req.user;
    const user = await User.findOne(email);
    if (user) {
      res.status(409).json({ message: "Email in use" });
      return;
    }
    const avatarURL = gravatar.url(email);

    const newUser = new User({ name, email, password, avatarURL });

    await newUser.hashPassword();
  } catch (error) {
    console.log(error);
  }
};

module.exports = singup;
