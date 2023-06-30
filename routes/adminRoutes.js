const router = require('express').Router();

const { getAllUsers } = require('../controller/user');
const { adminLogIn } = require('../controller/login');
const { adminCheckToken } = require('../middlewares/checkToken');

router.route('/').post(adminLogIn);
router.route('/users').get(adminCheckToken, getAllUsers);

module.exports = router;
