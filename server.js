const express = require('express');
const appRoutes = require('./routes/index');
const cloudinary = require('cloudinary').v2;

require('dotenv').config();
require('./config/database').connect();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
console.log(cloudinary.config());

const app = express();

app.use(express.json());
app.use('/api/v1/shop', appRoutes);

app.listen(process.env.PORT, () =>
  console.log(`The server on : localhost:${process.env.PORT}`)
);
