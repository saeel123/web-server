var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

console.log("server is running");

// app.get('/', function (req, res) {
//     res.send('hello express');
// });

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requiredAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));


app.listen(PORT, function () {
  console.log("Express Server is running on port: "+ PORT);
});
