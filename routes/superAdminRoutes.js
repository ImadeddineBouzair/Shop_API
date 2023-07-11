const router = require('express').Router();

const {
  getAllSuperAdmins,
  createSuperAdmin,
  deleteSuperAdmin,
} = require('../controller/superAdmin');

const { superAdminLogin } = require('../controller/login');

const { superAdminCheckToken } = require('../middlewares/checkToken');

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

router.route('/login').post(superAdminLogin);
router.route('/admins').get(getAllAdmins);
router.route('/users').get(getAllUsers);
router.route('/products').get(getAllProducts);
router.route('/createAdmin').post(createAdmin);
router.route('/createProduct').post(createProduct);
router
  .route('/getAllSuperAdmins/:password')
  .get(superAdminCheckToken, getAllSuperAdmins);
router.route('/createSuperAdmin/:password').post(createSuperAdmin);
router.route('/updateAdmin/:id').patch(updateAdmin);
router.route('/updateProduct/:id').patch(updateProduct);
router.route('/deleteSuperAdmin/:password/:id').delete(deleteSuperAdmin);
router.route('/deleteAdmin/:id').delete(deleteAdmin);
router.route('/deleteUser/:id').delete(deleteUserProfile);
router.route('/deleteProduct/:id').delete(deleteProduct);

module.exports = router;
