const dotenv = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
require('./database/connection');
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send(`Hello atharva from server`);
});

app.listen(3000, () => {
  console.log(`Server is running at port number ${PORT}`);
});
