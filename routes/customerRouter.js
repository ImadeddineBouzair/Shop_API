const express = require('express');
const {
  registerCustomer,
  updateProfile,
  deleteProfile,
} = require('../controller/customer');

const router = express.Router();

router.route('/register').post(registerCustomer);
router.route('/:id').patch(updateProfile).delete(deleteProfile);

module.exports = router;
