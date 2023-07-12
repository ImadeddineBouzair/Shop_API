const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const appRoutes = require('./routes/index');

require('dotenv').config();
require('./config/database').connect();

const app = express();

app.use(express.json());
app.use('/api/v1/shop', appRoutes);

// Documentation routes
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(process.env.PORT, () =>
  console.log(`The server on : localhost:${process.env.PORT}`)
);
