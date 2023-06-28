const User = require('../model/userSchema');

exports.registerCustomer = async (req, res) => {
  try {
    const { firstName, lastName, birthYear, email, password } = req.body;

    if (!(firstName, lastName, birthYear, email, password)) {
      return res.status(400).send('All the fields are required!!');
    }

    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.status(400).send('User already exist!!');
    }

    const user = new User({
      firstName,
      lastName,
      birthYear,
      email,
      password, //Will hash it later!!! ======================
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
      message: err,
    });
  }
};

exports.updateProfile = async (req, res) => {
  try {
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
      message: err,
    });
  }
};

exports.deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    const user = await User.findOne({ _id: id });
    if (!user) return res.status(404).send('Not Found!!');

    await User.findOneAndDelete({ _id: req.params.id });
    res.status(200).send('Deleted with success!!');

    res.status();
  } catch (err) {
    res.status(500).json({
      status: 'Fail',
      message: err,
    });
  }
};
