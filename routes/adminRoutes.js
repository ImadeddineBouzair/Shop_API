const router = require('express').Router();

const {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require('../controller/product');
const { getAllUsers } = require('../controller/user');
const { adminLogIn } = require('../controller/login');
const { adminCheckToken } = require('../middlewares/checkToken');

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Admin Login.
 *     description: Admin route for authontication, pass in email and password.
 */
router.route('/login').post(adminLogIn);
/**
 * @swagger
 * /admin/users:
 *   get:
 *     summary: list of users.
 *     description: This route returnes a list of user that are stored in database.
 */
router.route('/users').get(adminCheckToken, getAllUsers);
/**
 * @swagger
 * /admin/products:
 *   get:
 *     summary: list of products.
 *     description: This route returnes a list of products.
 */
router.route('/products').get(getAllProducts);
/**
 * @swagger
 * /admin/createProduct:
 *   post:
 *     summary: create products.
 *     description: This route returnes a created product,data needed are [productName, category, price, quantity, image, description].
 */
router.route('/createProduct').post(adminCheckToken, createProduct);
/**
 * @swagger
 * /admin/updateProduct/:id:
 *   patch:
 *     summary: Updating a product.
 *     description: This route for updating a product, You need to pass into the route an id of the product that you want to update it.
 */
router.route('/updateProduct/:id').patch(adminCheckToken, updateProduct);
/**
 * @swagger
 * /admin/deleteProduct/:id:
 *   delete:
 *     summary: delete product.
 *     description: This route for deleting a product, You need to pass into the route an id of the product that you want to delete it.
 */
router.route('/deleteProduct/:id').delete(adminCheckToken, deleteProduct);

module.exports = router;
