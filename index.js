const express = require('express'),
      displayRoutes = require('express-routemap'),
      hbs = require('handlebars'),
      morgan = require('morgan');

var port = process.env.PORT || 8080;
var app = express();

app.set('view engine', 'hbs');

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('server is running on ' + port);
  displayRoutes(app);
});
