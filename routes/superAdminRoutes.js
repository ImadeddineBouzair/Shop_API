const router = require('express').Router();

const {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controller/admin');
const { getAllUsers, deleteUserProfile } = require('../controller/user');
const { createProduct } = require('../controller/product');

// router.route('/login').post(adminLogIn);
router.route('/admins').get(getAllAdmins);
router.route('/users').get(getAllUsers);
router.route('/createAdmin').post(createAdmin);
router.route('/createProduct').post(createProduct);
router.route('/updateAdmin/:id').patch(updateAdmin);
router.route('/deleteAdmin/:id').delete(deleteAdmin);
router.route('/deleteUser/:id').delete(deleteUserProfile);

module.exports = router;
