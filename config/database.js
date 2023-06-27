const mongoose = require('mongoose');

exports.connect = async () => {
  try {
    await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database successfuly!!');
  } catch (err) {
    console.log(`Databse err: ${err}`);
  }
};
