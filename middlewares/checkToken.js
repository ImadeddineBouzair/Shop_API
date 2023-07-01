const jwt = require('jsonwebtoken');
const Admin = require('../model/adminSchema');
const User = require('../model/userSchema');

exports.adminCheckToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(403).send('Not allowed');

    const admin = jwt.decode(token, process.env.TOEKN_KEY);
    if (!admin) return res.status(403).send('Invalid token');

    const existAdmin = await Admin.findOne({ email: admin.admin_email });
    if (!existAdmin) return res.status(403).send('Not allowed');

    return next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.userCheckToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(403).send('Not allowed');

    const user = await jwt.decode(token, process.env.TOKEN_KEY);
    if (!user) return res.status(403).send('Invalid token');

    const existUser = await User.findOne({ email: user.user_email });
    if (!existUser) return res.status(403).send('Not allowed');

    next();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
