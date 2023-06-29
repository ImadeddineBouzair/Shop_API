const Admin = require('../model/adminSchema');
const User = require('../model/userSchema');

// ============== User Controllers
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users) return res.status(400).send('No data!!');

    res.status(200).json({
      status: 'Seccuss',
      results: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

// exports.banningUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { ban } = req.body;

//     if (!ban || ban !== 'true' || ban !== 'false')
//       return res.status(400).send('Some thing wrong!!');

//     const user = await User.findOne({ _id: id });
//     if (user.ban === 'true') {
//       return res.status(400).send('User already baned!!');
//     }

//     const updateUser = await User.findOneAndUpdate({ _id: id }, ban, {
//       new: true,
//     });
//     res.status(200).json({
//       status: 'User is baned!!',
//       data: updateUser,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: 'Fail',
//       message: err.message,
//     });
//   }
// };

// ============== Admin Controllers
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    if (!admins) return res.status(400).send('No data found!!');

    res.status(200).json({
      status: 'seccuss',
      results: admins.length,
      data: admins,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const { adminName, birthday, email, password } = req.body;
    if (!(adminName, birthday, email, password)) {
      res.status(400).send('All the fields ar required!!');
    }

    const oldAdmin = await Admin.findOne({ email });
    if (oldAdmin) return res.status(400).send('Admin already exist!!');

    const admin = new Admin({
      adminName,
      birthday,
      email,
      password, // will hash it later ==========
    });

    const newAdmin = await admin.save();
    res.status(200).json({
      status: 'Created with seccuss',
      data: newAdmin,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAdminProfile = async (req, res) => {
  try {
    // const admin = await Admin.findById(req.params.id);
    // if (!admin) return res.status(400).send('Not found!');

    const adminupdate = await Admin.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({
      status: 'Updated with seccuss!!',
      data: adminupdate,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
