const express = require('express');
const app = express();

const appRoutes = require('./routes/index');

require('dotenv').config();
require('./config/database').connect();

app.use(express.json());

app.use('/api/v1/shop', appRoutes);

app.listen(3000, () =>
  console.log(`The server on : localhost:${process.env.PORT}`)
);