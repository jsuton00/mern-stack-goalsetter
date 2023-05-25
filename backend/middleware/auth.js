const jwt = require('jsonwebtoken');
const handleAsync = require('express-async-handler');
const User = require('../models/users');

const protect = handleAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Authentication not authorized.');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Authentication not authorized.');
  }
});

module.exports = { protect };
