const express = require('express');
const router = express.Router();

const customerRoutes = require('./customerRouter');

router.use('/', customerRoutes);

module.exports = router;
