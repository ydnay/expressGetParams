// app.js
const express = require('express');
const app     = express();
const hbs     = require('hbs');
const path    = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  console.log(req);
  res.send('Home');
});

app.get('/users/:username', function (req, res) {
  res.send(req.params);
});

app.get('/books/:bookId', function (req, res) {
  res.send(req.params);
});

app.get('/users/:username/books/:bookId', function (req, res) {
  res.send(req.params)
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))