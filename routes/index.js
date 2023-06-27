const express = require('express');
const router = express.Router();

const customerRoutes = require('./customerRouter');

router.use('/register', customerRoutes);

module.exports = router;
