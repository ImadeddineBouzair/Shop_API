const router = require('express').Router();

const { createProduct } = require('../controller/product');
const { getAllUsers } = require('../controller/user');
const { adminLogIn } = require('../controller/login');
const { adminCheckToken } = require('../middlewares/checkToken');

router.route('/login').post(adminLogIn);
router.route('/createProduct').post(createProduct);
router.route('/users').get(adminCheckToken, getAllUsers);

module.exports = router;
