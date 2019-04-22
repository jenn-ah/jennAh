
const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8989;
const bodyParser = require('body-parser');



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/smoke', (req, res) => {
  res.send('jenn');
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

