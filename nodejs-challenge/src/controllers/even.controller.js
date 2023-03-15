const express = require('express');
const { validateUser } = require('../middlewares/auth.middleware');
const router = express.Router();
const ROUTES = require('../routes');
const { isEven } = require('../services/even.service');
const [ { root } ] = ROUTES.even;

router.get(root, validateUser, (req, res) => {
  const { n } = req.params;
  const result = isEven(parseInt(n));
  res.send(`El número ingresado es ${result ? 'par' : 'impar'}.`);
});

module.exports = router;