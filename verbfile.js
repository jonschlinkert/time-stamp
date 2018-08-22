'use strict';

var timestamp = require('.');

module.exports = function(app) {
  app.use(require('verb-generate-readme'));
  app.helper('timestamp', timestamp);
  app.helper('timestampUTC', timestamp.utc);
};
