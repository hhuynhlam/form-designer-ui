const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//------------------------------------
// Middleware
//------------------------------------

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//------------------------------------
// DB Configurations
//------------------------------------

// mongoose.connect(
//   process.env.MONGO_URI || 'mongodb://localhost:27017/sidekick_development',
//   process.env.MONGO_OPTIONS || {}
// );

//------------------------------------
// CORS
//------------------------------------
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  next();
})

//------------------------------------
// Route Definitions
//------------------------------------

require('./api')(app);

app.use('/*', (req, res) => {
  res.sendStatus(404);
});

//------------------------------------
// Error Handler
//------------------------------------

// development
if (process.env.NODE_ENV !== 'production') {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.render('error', {
      message: err.message,
      error: err
    });
  });

// production
} else {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.render('error', {
      message: err.message,
      error: {}
    });
  });
}

module.exports = app;
