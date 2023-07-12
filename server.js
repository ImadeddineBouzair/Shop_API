const express = require('express');
const multer = require('multer');
const upload = multer();
const appRoutes = require('./routes/index');

require('dotenv').config();
require('./config/database').connect();

const app = express();

app.use(express.json());
app.use(upload.array());
app.use('/api/v1/shop', appRoutes);

app.listen(process.env.PORT, () =>
  console.log(`The server on : localhost:${process.env.PORT}`)
);
