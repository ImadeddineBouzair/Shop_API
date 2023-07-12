const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
    description:
      'This is an e-commerce REST API application made with Express. It retrieves data from JSONPlaceholder.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,

  apis: [
    `${__dirname}/../routes/superAdminRoutes.js`,
    `${__dirname}/../routes/adminRoutes.js`,
    `${__dirname}/../routes/userRoutes.js`,
  ],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
