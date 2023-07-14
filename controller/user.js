const bcrypt = require('bcryptjs');
const User = require('../model/userSchema');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length === 0) return res.status(400).send('No data!!');

    const sort = req.query;
    if (sort) {
      const users = await User.find().sort(sort);

      return res.status(200).json({
        status: 'Seccuss',
        results: users.length,
        data: users,
      });
    }

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

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, birthYear, email, password } =
      req.body;

    if (
      !(firstName && lastName && phoneNumber && birthYear && email && password)
    ) {
      return res.status(400).send('All the fields are required!!');
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).send('User already exist!!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      phoneNumber,
      birthYear,
      email,
      password: hashedPassword,
    });

    const newUser = await user.save();

    res.status(201).json({
      status: 'Register with success',
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).send('Not found!!');
    }

    if (Object.keys(req.body).length === 0)
      return res.status(400).send('No data to update');

    const updateProfile = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      status: 'Updated with success!!',
      data: updateProfile,
    });

    res.status(200);
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};

exports.deleteUserProfile = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findOne({ _id: id });
    if (!user) return res.status(404).send('Not Found!!');

    await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).send('Deleted with success!!');
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err.message,
    });
  }
};
