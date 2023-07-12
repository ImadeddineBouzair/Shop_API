const mongoose = require('mongoose');

const db_string = process.env.DB_URL.replace(
  '<password>',
  process.env.DB_ATLAS_PASSWORD
);

exports.connect = async () => {
  try {
    await mongoose.connect(db_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Atlas database successfuly!!');
  } catch (err) {
    console.log(`Databse err: ${err}`);
  }
};
