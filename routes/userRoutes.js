const router = require('express').Router();
const {
  registerUser,
  updateProfile,
  deleteUserProfile,
} = require('../controller/user');
const { userLogIn } = require('../controller/login');
const { userCheckToken } = require('../middlewares/checkToken');
const {
  Orders,
  createOrder,
  deleteOrder,
  deleteAllUserOrders,
} = require('../controller/order');

router.route('/login').post(userLogIn);
router.route('/orders').get(Orders);
router.route('/register').post(registerUser);
router.route('/createOrder').post(createOrder);
router.route('/updateProfile/:id').patch(userCheckToken, updateProfile);
router.route('/deleteProfile/:id').delete(userCheckToken, deleteUserProfile);
router.route('/deleteOrder/:id').delete(deleteOrder);
router.route('/deleteAllUserOrders/:user_id').delete(deleteAllUserOrders);

module.exports = router;
