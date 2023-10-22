const port = 3000;

var express = require('express');
var app = express();

const router = require('./routes/router.js');

app.use('/',router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});