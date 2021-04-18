require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(process.env.port, () => {
  console.log(`Running at http://localhost:${process.env.port}`)
});
