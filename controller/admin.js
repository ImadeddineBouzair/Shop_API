const bcrypt = require('bcryptjs');
const Admin = require('../model/adminSchema');
// const User = require('../model/userSchema');

// ============== User Controllers
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();

//     if (!users) return res.status(400).send('No data!!');

//     res.status(200).json({
//       status: 'Seccuss',
//       results: users.length,
//       data: users,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: 'Fail',
//       message: err.message,
//     });
//   }
// };

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
    const { adminName, phoneNumber, birthday, email, password } = req.body;

    if (!(adminName, phoneNumber, birthday, email, password)) {
      res.status(400).send('All the fields ar required!!');
    }

    const oldAdmin = await Admin.findOne({ email });
    if (oldAdmin) return res.status(400).send('Admin already exist!!');

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new Admin({
      adminName,
      phoneNumber,
      birthday,
      email,
      password: hashedPassword,
    });

    const newAdmin = await admin.save();
    res.status(201).json({
      status: 'Created with seccuss',
      data: newAdmin,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ _id: req.params.id });
    if (!admin) return res.status(400).send('Not found!');

    if (Object.keys(req.body).length === 0)
      return res.status(400).send('No data to update');

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

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOne({ _id: req.params.id });
    if (!admin) return res.status(400).send('Not found!!');

    await Admin.findOneAndDelete({ _id: req.params.id });
    res.status(200).send('Delete with success!!');
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
