function api(app) {
  app.use('/api/form', require('./form'));
}

module.exports = api;
