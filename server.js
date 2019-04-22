require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/smoke', () => {
  res.send('smoke test');
})

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});