const router = require('express').Router();
const {
  registerUser,
  updateProfile,
  deleteUserProfile,
} = require('../controller/user');

router.route('/register').post(registerUser);
router.route('/:id').patch(updateProfile).delete(deleteUserProfile);

module.exports = router;
