const router = require('express').Router();

const {
  getAllAdmins,
  createAdmin,
  updateAdmin,
  deleteAdmin,
} = require('../controller/superAdmin');
const { adminLogIn } = require('../controller/login');
const { adminCheckToken } = require('../middlewares/checkToken');
const { getAllUsers, deleteUserProfile } = require('../controller/user');

router.route('/').post(adminLogIn);
router.route('/admins').get(adminCheckToken, getAllAdmins);
router.route('/users').get(adminCheckToken, getAllUsers);
router.route('/createAdmin').post(adminCheckToken, createAdmin);
router.route('/updateAdmin/:id').patch(adminCheckToken, updateAdmin);
router.route('/deleteAdmin/:id').delete(adminCheckToken, deleteAdmin);
router.route('/deleteUser/:id').delete(adminCheckToken, deleteUserProfile);

module.exports = router;
