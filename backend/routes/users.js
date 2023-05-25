const express = require('express');
const { getUser, register, login } = require('../controllers/users');
const router = express.Router();
const { protect } = require('../middleware/auth');

router.post('/', register);
router.post('/login', login);
router.get('/user', protect, getUser);

module.exports = router;
