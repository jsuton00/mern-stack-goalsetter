const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const handleAsync = require('express-async-handler');
const User = require('../models/users');
require('dotenv').config();

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const register = handleAsync(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please enter all fields.');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists.');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid data');
  }
});

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const login = handleAsync(async (req, res) => {
  const { email, password } = req.body;

  // Check for user email
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid data.');
  }
});

// @desc    Get user
// @route   GET /api/users/user
// @access  Private
const getUser = handleAsync(async (req, res) => {
  const { id, name, email } = await User.findById(req.user.id);
  res.status(200).json({
    _id: id,
    name: name,
    email: email,
  });
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

module.exports = {
  register,
  login,
  getUser,
};
