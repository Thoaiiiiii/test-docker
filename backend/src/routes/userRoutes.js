const express = require('express');
const { resgister, login } = require('../controllers/authController');
const router = express.Router();

router.post('/register', resgister);
router.post('/login', login);

module.exports = router;