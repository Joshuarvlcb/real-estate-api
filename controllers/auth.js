//break down jwt and mongoose bycrypt

const jwt = require("jsonwebtoken");
const User = require("../models/authModel");
const register = async (req, res) => {
  // res.send("hello");

  //create jwt token for user
  try {
    const user = await User.create({ ...req.body });
    const token = user.createJWT(); //create user model
    // const token = user.createJWT();

    res.status(200).json({ ...req.body, token });
  } catch (err) {
    throw new Error(err);
  }
};

const login = async (req, res) => {
  //if email and password are defined
  const { email, password: p } = req.body;
  //if email is in mongoDB
  if (!email || !p) {
    throw new Error("you need to use email or password");
  }

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("incorrect password or username");
  }
  const password = await user.comparePassword(p);
  if (!password) throw new Error("incorrect password");
  const token = user.createJWT();
  res.status(200).json({ username: user, password });
  //hash password if it = the same on the db
  //get jwt token
};

module.exports = { register, login };
