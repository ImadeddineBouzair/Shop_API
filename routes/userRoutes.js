const router = require('express').Router();
const {
  registerUser,
  updateProfile,
  deleteUserProfile,
} = require('../controller/user');
const { userLogIn } = require('../controller/login');
const { userCheckToken } = require('../middlewares/checkToken');

router.route('/register').post(registerUser);
router.route('/login').post(userLogIn);
router.route('/updateProfile/:id').patch(userCheckToken, updateProfile);
router.route('/deleteProfile/:id').delete(userCheckToken, deleteUserProfile);

module.exports = router;
