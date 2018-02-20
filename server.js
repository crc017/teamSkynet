const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const methodOverride = require("method-override");
const mongoose = require("mongoose");
const cookieparser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const db = require("./models");

const logger = require('morgan');
const router = require("./routes/router");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(cookieparser());
app.use("/", router);


// // Serve application file depending on environment
// app.get('/app.js', function(req, res) {
//   if (process.env.PRODUCTION) {
//     res.sendFile(__dirname + '/client/build/app.js');
//   } else {
//     res.redirect('//localhost:9090/build/app.js');
//   }
// });

// // Serve aggregate stylesheet depending on environment
// app.get('/style.css', function(req, res) {
//   if (process.env.PRODUCTION) {
//     res.sendFile(__dirname + '/client/build/style.css');
//   } else {
//     res.redirect('//localhost:9090/build/style.css');
//   }
// });

app.use(express.static(__dirname + '/client/build'));


// Serve index page
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});


app.post('/landing', function(req, res) {
  res.json({
    title: "Landing Page"
  });
});

app.post('/home', function(req, res) {
  res.json({
    title: "Home Page"
  });
});


/*************************************************************
 *
 * Webpack Dev Server
 *
 * See: http://webpack.github.io/docs/webpack-dev-server.html
 *
 *************************************************************/

// if (!process.env.PRODUCTION) {
//   var webpack = require('webpack');
//   var WebpackDevServer = require('webpack-dev-server');
//   var config = require('./client/webpack.local.config');

//   new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     noInfo: true,
//     historyApiFallback: true
//   }).listen(9090, 'localhost', function (err, result) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }



var port = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitHub",
  {
    //below line is unnecessary in mongoose version 5
    //useMongoClient: true
  }
);


var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Essential React listening at http://%s:%s', host, port);
});