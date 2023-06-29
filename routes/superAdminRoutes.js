const router = require('express').Router();

const {
  getAllUsers,
  getAllAdmins,
  createAdmin,
  updateAdminProfile,
} = require('../controller/superAdmin');
const { deleteUserProfile } = require('../controller/user');

router.route('/admins').get(getAllAdmins);
router.route('/users').get(getAllUsers);
router.route('/createAdmin').post(createAdmin);
router.route('/:id').patch(updateAdminProfile).delete(deleteUserProfile);

module.exports = router;
