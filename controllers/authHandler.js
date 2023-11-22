const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/users/userSchema");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).send("Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: err
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send("User not found!");
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(400).send("Incorrect password!");
    }
    const payload = {
      name: user.name,
      email: user.email,
      id: user._id,
      exp: Math.floor(Date.now() / 1000) + 1 * 60 * 60
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 1 * 60 * 60 * 1000),
      secure: false,
      httpOnly: true
    });
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send({
      status: "failed",
      message: err
    });
  }
};

const protect = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return res.status(401).send("You are not logged in! Please log in");
    }
    const decodedToken = await verifyToken(token);
    req.auth = decodedToken;
    next();
  } catch (err) {
    console.log(err);
    return res.status(500).send("ISE");
  }
};

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        reject(new Error("Token verification failed"));
      } else {
        resolve(decodedToken);
      }
    });
  });
};

module.exports = {
  register,
  login,
  protect
}