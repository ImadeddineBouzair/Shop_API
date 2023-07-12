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

/**
 * @swagger
 * /superAdmin/login:
 *   post:
 *     summary: superAdmin Login.
 *     description: superAdmin route for authontication, pass in email and password.
 */
router.route('/login').post(superAdminLogin);
/**
 * @swagger
 * /superAdmin/login:
 *   get:
 *     summary: Getting all admins.
 *     description: superAdmin route for getting a liste of admins.
 */
router.route('/admins').get(superAdminCheckToken, getAllAdmins);
/**
 * @swagger
 * /superAdmin/users:
 *   get:
 *     summary: Getting all users.
 *     description: superAdmin route for getting a liste of users.
 */
router.route('/users').get(superAdminCheckToken, getAllUsers);
/**
 * @swagger
 * /superAdmin/products:
 *   get:
 *     summary: Getting all the products.
 *     description: superAdmin route for getting a liste of products.
 */
router.route('/products').get(getAllProducts);
/**
 * @swagger
 * /superAdmin/createAdmin:
 *   post:
 *     summary: Creating Admin.
 *     description: superAdmin route for creating admin profile, Data nedded [adminName, phoneNumber, birthYear, email, password, role:admin, ban ].
 */
router.route('/createAdmin').post(superAdminCheckToken, createAdmin);
/**
 * @swagger
 * /superAdmin/createProduct:
 *   post:
 *     summary: Creaating a product.
 *     description: superAdmin route for Creating a prodcut.
 */
router.route('/createProduct').post(superAdminCheckToken, createProduct);
/**
 * @swagger
 * /superAdmin/getAllSuperAdmins/:password:
 *   get:
 *     summary: Getting alist of superAdmins.
 *     description: superAdmin route for getting a liste of superAdmins, create in ur .env (PRIVATE_PASSWORD = ...) and pass into that route this password (only the main superAdmin need to know this password).
 */
router
  .route('/getAllSuperAdmins/:password')
  .get(superAdminCheckToken, getAllSuperAdmins);
/**
 * @swagger
 * /superAdmin/createSuperAdmin/:password:
 *   post:
 *     summary: Creating superAdmins profile.
 *     description: superAdmin route for creating superAdmins profile, create in ur .env (PRIVATE_PASSWORD = ...) and pass into that route this password (only the main superAdmin need to know this password, means only the main super admin can creat another superAdmin) .
 */
router
  .route('/createSuperAdmin/:password')
  .post(superAdminCheckToken, createSuperAdmin);
/**
 * @swagger
 * /superAdmin/updateAdmin/:id:
 *   patch:
 *     summary: Update admin profile.
 *     description: superAdmin route for updating admins profile.
 */
router.route('/updateAdmin/:id').patch(superAdminCheckToken, updateAdmin);
/**
 * @swagger
 * /superAdmin/updateProduct/:id:
 *   patch:
 *     summary: Update Products.
 *     description: superAdmin route for updatingproducts informations.
 */
router.route('/updateProduct/:id').patch(superAdminCheckToken, updateProduct);
/**
 * @swagger
 * /superAdmin/deleteSuperAdmin/:password/:id:
 *   delete:
 *     summary: deleting superAdmins profile.
 *     description: superAdmin route for deleting superAdmins profile, create in ur .env (PRIVATE_PASSWORD = ...) and pass into that route this password (only the main superAdmin need to know this password, means only the main super admin can delete the other superAdmin).
 */
router
  .route('/deleteSuperAdmin/:password/:id')
  .delete(superAdminCheckToken, deleteSuperAdmin);
/**
 * @swagger
 * /superAdmin/deleteAdmin/:id:
 *   delete:
 *     summary: delete admins.
 *     description: superAdmin route for deleting admins, Need admin ID in the route.
 */
router.route('/deleteAdmin/:id').delete(superAdminCheckToken, deleteAdmin);
/**
 * @swagger
 * /superAdmin/deleteUserProfile/:id:
 *   delete:
 *     summary: delete user profile.
 *     description: superAdmin route for deleting users, Need user ID in the route.
 */
router.route('/deleteUser/:id').delete(superAdminCheckToken, deleteUserProfile);
/**
 * @swagger
 * /superAdmin/deleteProduct/:id:
 *   delete:
 *     summary: delete product.
 *     description: superAdmin route for deleting products, Need product ID in the route.
 */
router.route('/deleteProduct/:id').delete(superAdminCheckToken, deleteProduct);

module.exports = router;
