
const express = require('express');
const router = express.Router();

const user = require('./routes/user');
const news = require('./routes/news');

// Tie your routes together here.
router.use("/user", user);
router.use("/news", news);

module.exports = router;