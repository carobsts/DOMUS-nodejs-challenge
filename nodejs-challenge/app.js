const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validateUser } = require('./src/middlewares/auth.middleware');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fibonacciRoutes = require('./src/controllers/fibonacci.controller');
const lettersRoutes = require('./src/controllers/letters.controller');
const evenRoutes = require('./src/controllers/even.controller');

app.use('/fibonacci', fibonacciRoutes);
app.use('/letters', lettersRoutes);
// use case: /even/:n?user={{some_value}}
app.use('/even', evenRoutes, validateUser);

// To add on all routes
// app.use(validateUser);

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});