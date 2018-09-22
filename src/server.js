const express = require('express');
const bodyParser = require('body-parser');
const service = require('./service');

const app = express();

app.use(bodyParser.json());
app.use(require('./router'));




app.listen(5500, function() {
  console.log(`http://localhost:${this.address().port}`)
})