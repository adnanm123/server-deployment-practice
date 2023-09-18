'use strict';

const multiply = require('./multiply.js'); // relative path from 1 file to another.
const express = require('express'); // HTTP REST framework
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/multiply', (req, res) => {

  const value1 = parseInt(req.query.value1);
  const value2 = parseInt(req.query.value2);

  if (isNaN(value1) || isNaN(value2)) {
    res.status(400).send({ error: 'Invalid input. Both values must be valid numbers.' });
  } else {
    console.log(value1, value2);
    res.status(200).send({ results: multiply(value1, value2) });
  }
});

module.exports = app;
