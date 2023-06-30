const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../model/adminSchema');
const User = require('../model/userSchema');

exports.adminLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email, password))
      return res.status(400).send('All the fields are required!!');

    const admin = await Admin.findOne({ email });
    if (!(admin && (await bcrypt.compare(password, admin.password)))) {
      res.status(400).send('Invalid email or password!!');
    }

    const token = jwt.sign(
      {
        admin_id: admin._id,
        admin_email: admin.email,
      },
      process.env.TOKEN_KEY,
      { expiresIn: '1h' }
    );

    admin.token = token;
    res.status(200).json({
      status: 'Admin authenticated successfully!!',
      data: admin,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.userLogIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email, password))
      return res.status(400).send('All the fields are required!!');

    const user = await User.findOne({ email });
    if (!(user && (await bcrypt.compare(password, user.password)))) {
      res.status(400).send('Invalid email or password!!');
    }

    const token = jwt.sign(
      {
        user_id: user._id,
        user_email: user.email,
      },
      process.env.TOKEN_KEY,
      { expiresIn: '1h' }
    );

    user.token = token;
    res.status(200).json({
      status: 'User authenticated successfully!!',
      data: user,
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
