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
      password, //Will hash it later!!!
    });

    const newUser = await user.save();

    res.status(200).json({
      status: 'success',
      data: {
        newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
