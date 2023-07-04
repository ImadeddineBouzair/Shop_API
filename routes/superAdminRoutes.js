const router = require('express').Router();

const {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controller/admin');
const { getAllUsers, deleteUserProfile } = require('../controller/user');
const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require('../controller/product');

router.route('/admins').get(getAllAdmins);
router.route('/users').get(getAllUsers);
router.route('/products').get(getAllProducts);
router.route('/createAdmin').post(createAdmin);
router.route('/createProduct').post(createProduct);
router.route('/updateAdmin/:id').patch(updateAdmin);
router.route('/updateProduct/:id').patch(updateProduct);
router.route('/deleteAdmin/:id').delete(deleteAdmin);
router.route('/deleteUser/:id').delete(deleteUserProfile);
router.route('/deleteProduct/:id').delete(deleteProduct);

module.exports = router;
