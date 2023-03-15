const express = require('express');
const router = express.Router();
const ROUTES = require('../routes');
const { getButtomUpDynamicProgramming, 
  getRecursiveFibonacciByIndex, 
  getTopDownDynamicProgramming 
} = require('../services/fibonacci.service');
const [ { recursive_fibonacci }, { dynamic_programming } ] = ROUTES.fibonacci;
const [ { top_down }, { bottom_up } ] = dynamic_programming; 

router.get(recursive_fibonacci, (req, res) => {
  const { k } = req.params;
  const y  = getRecursiveFibonacciByIndex(k);
  res.send(`El numero correspondiente en la Sucesión de Fibonacci es: ${y}`);
});

router.get(bottom_up, (req, res) => {
  const { k } = req.params;
  const y = getButtomUpDynamicProgramming(k);
  res.send(`El numero correspondiente en la Sucesión de Fibonacci es: ${y}`);
});

router.get(top_down, (req, res) => {
  const { k } = req.params;
  const y = getTopDownDynamicProgramming(k);
  res.send(`El numero correspondiente en la Sucesión de Fibonacci es: ${y}`);
});

module.exports = router;