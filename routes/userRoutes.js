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

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: user Login.
 *     description: user route for authontication, pass in email and password.
 */
router.route('/login').post(userLogIn);
/**
 * @swagger
 * /user/orders:
 *   get:
 *     summary: getting a list of orders.
 *     description: This route for getting all the products that the user order it.
 */
router.route('/orders').get(userCheckToken, Orders);
/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: user register.
 *     description: This route for user registration, It will returnes a user data [firstName, lasteName, phoneNumber, birthYear, email, password, role:user, ban:flast or true].
 */
router.route('/register').post(registerUser);
/**
 * @swagger
 * /user/createOrder:
 *   post:
 *     summary: Add order.
 *     description: This route for adding the user orders.
 */
router.route('/createOrder').post(userCheckToken, createOrder);
/**
 * @swagger
 * /user/upsateProfile/:id:
 *   patch:
 *     summary: Update Profile.
 *     description: This route for updating the user data, You need pass in the route the user ID.
 */
router.route('/updateProfile/:id').patch(userCheckToken, updateProfile);
/**
 * @swagger
 * /user/deleteProfile/:id:
 *   delete:
 *     summary: delete Profile.
 *     description: This route for deleting the user profile, You need pass in the route the user ID.
 */
router.route('/deleteProfile/:id').delete(userCheckToken, deleteUserProfile);
/**
 * @swagger
 * /user/deleteOrder/:id:
 *   delete:
 *     summary: delete order.
 *     description: This route for deleting the user order, You need pass in the route the order ID.
 */
router.route('/deleteOrder/:id').delete(userCheckToken, deleteOrder);
/**
 * @swagger
 * /user/deleteAllUserOrders/:user_id:
 *   delete:
 *     summary: Delete all the user orders.
 *     description: This route for deleting the user orders, You need pass in the route the user ID.
 */
router
  .route('/deleteAllUserOrders/:user_id')
  .delete(userCheckToken, deleteAllUserOrders);

module.exports = router;
