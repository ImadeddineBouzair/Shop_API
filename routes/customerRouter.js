const express = require('express');
const { registerCustomer } = require('../controller/customer');

const router = express.Router();

router.route('/').get(registerCustomer);

module.exports = router;
