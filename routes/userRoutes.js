const router = require('express').Router();
const {
  registerUser,
  updateProfile,
  deleteUserProfile,
} = require('../controller/user');
const { userLogIn } = require('../controller/login');
const { userCheckToken } = require('../middlewares/checkToken');
const { Orders, createOrder } = require('../controller/order');

router.route('/orders').get(Orders);
router.route('/register').post(registerUser);
router.route('/login').post(userLogIn);
router.route('/createOrder').post(createOrder);
router.route('/updateProfile/:id').patch(userCheckToken, updateProfile);
router.route('/deleteProfile/:id').delete(userCheckToken, deleteUserProfile);

module.exports = router;
