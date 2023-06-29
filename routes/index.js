const express = require('express');
const router = express.Router();

const userRoutes = require('./userRoutes');
const superAdminRoutes = require('./superAdminRoutes');

router.use('/superAdmin', superAdminRoutes);
router.use('/user', userRoutes);

module.exports = router;
