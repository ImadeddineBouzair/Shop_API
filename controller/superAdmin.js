const SuperAdmin = require('../model/superAdminSchema');
const bcrypt = require('bcryptjs');

exports.getAllSuperAdmins = async (req, res) => {
  try {
    // Check if it's allowed to get all superAdmins profile
    const privatePassword = req.params.password;
    if (privatePassword !== process.env.PRIVATE_PASSWORD)
      return res.status(400).send('Not allowed');

    const superAdmins = await SuperAdmin.find();
    if (superAdmins.length === 0) return res.status(400).send('No data found');

    res.status(200).json({
      status: 'success',
      results: superAdmins.length,
      data: superAdmins,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createSuperAdmin = async (req, res) => {
  try {
    // Check if it's allowed to create a superAdmin profile
    const privatePassword = req.params.password;
    if (privatePassword !== process.env.PRIVATE_PASSWORD)
      return res.status(400).send('Not allowed');

    const { superAdminName, phoneNumber, email, password } = req.body;

    if (!(superAdminName, phoneNumber, email, password))
      return res.status(400).send('All the fields ar required');

    const existingSuperAdmin = await SuperAdmin.findOne({ email });
    if (existingSuperAdmin) return res.status(400).send('Email already valid');

    const hashedPassword = await bcrypt.hash(password, 10);

    const superAdmin = await new SuperAdmin({
      superAdminName,
      phoneNumber,
      email,
      password: hashedPassword,
    });

    const newSuperAdmin = await superAdmin.save();

    res.status(201).json({
      status: 'Created with success',
      data: newSuperAdmin,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteSuperAdmin = async (req, res) => {
  try {
    // Check if it's allowed to delete a superAdmin profile
    const privatePassword = req.params.password;
    if (privatePassword !== process.env.PRIVATE_PASSWORD)
      return res.status(400).send('Not allowed');

    const id = req.params.id;

    const existingSuperAdmin = await SuperAdmin.findOne({ _id: id });
    if (!existingSuperAdmin) return res.status(400).send('Not found');

    await SuperAdmin.findOneAndDelete({ _id: id });

    res.status(200).json({
      status: 'Deleted with sussecc',
      data: existingSuperAdmin,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
