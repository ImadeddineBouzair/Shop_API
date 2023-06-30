const express = require('express');
const router = express.Router();

const superAdminRoutes = require('./superAdminRoutes');
const adminRoutes = require('./adminRoutes');
const userRoutes = require('./userRoutes');

router.use('/superAdmin', superAdminRoutes);
router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

module.exports = router;
