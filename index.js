/*!
 * time-stamp <https://github.com/jonschlinkert/time-stamp>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var pad = require('pad-left');

/**
 * Expose `timestamp`
 */

/**
 * Parse the given pattern and return a formatted
 * timestamp.
 *
 * @param  {String} `pattern` Date pattern.
 * @param  {Date} `date` Date object.
 * @return {String}
 */

module.exports = function timestamp(pattern, date) {
  if (typeof pattern !== 'string') {
    date = pattern;
    pattern = 'YYYY:MM:DD';
  }
  date = date || new Date();
  return pattern.replace(/([YMDHms]{2,4})(:\/)?/g, function (_, key, sep) {
    var time = method(key);
    if (!time) return _;

    var res = date[time]().toString();
    var diff = key.length - res.length;
    return pad(res, diff, 0) + (sep || '');
  });
};

function method(key) {
  return ({
   YYYY: 'getFullYear',
   YY: 'getFullYear',
   MM: 'getMonth',
   DD: 'getDate',
   HH: 'getHours',
   mm: 'getMinutes',
   ss: 'getSeconds',
   ms: 'getMilliseconds'
  })[key];
}
