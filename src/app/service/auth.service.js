// services/auth.service.js
// const connectDB = require("../utils/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

// Check if a user exists by email
const checkUserExists = async (email) => {
  const user = await User.findOne({ email: email });
  return user || null;
};

// Create a new user
const createUser = async (user) => {
  const result = await User.create({
    name: user.name || null,
    email: user.email,
    password: user.password,
  });

  return { id: result.insertedId, ...user };
};

// Validate user login
const validateUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) return null;

  const match = await bcrypt.compare(password, user.password);
  if (!match) return null;

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  return { user, token };
};

module.exports = {
  checkUserExists,
  createUser,
  validateUser,
};
