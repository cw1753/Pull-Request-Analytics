const express = require('express');
const livenessCheck = require('./src/middleware/livenessCheck');
const errorHandler = require('./src/middleware/errorHandler');
const routes = require('./src/routes/router');

// Setup env
require('dotenv').config();

const app = express();

//Middleware
app.use(livenessCheck);

//Send up Routes
app.use('/api', routes );

//Error Handler
app.use(errorHandler)


const port = process.env.PORT || 3000;

app.listen(port)
console.log(`Server running on port ${port}`)
