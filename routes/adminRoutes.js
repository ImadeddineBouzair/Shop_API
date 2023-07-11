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

router.route('/login').post(adminLogIn);
router.route('/users').get(adminCheckToken, getAllUsers);
router.route('/products').get(getAllProducts);
router.route('/createProduct').post(createProduct);
router.route('/updateProduct/:id').post(updateProduct);
router.route('/deleteProduct/:id').delete(deleteProduct);

module.exports = router;
