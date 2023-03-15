const express = require('express');
const router = express.Router();
const ROUTES = require('../routes');
const { firstMostRepeatedLetter } = require('../services/letters.service');
const [ { root } ] = ROUTES.letters;; 

router.post(root, (req, res) => {
  const { word } = req.body;
  const resp = firstMostRepeatedLetter(word); 
  const result = !!resp.most_common_letter 
  ? `La primera letra repetida es: ${resp.most_common_letter.toUpperCase()}. Index: ${resp.index}` 
  : resp.index; 
  res.send(result);
});

module.exports = router;