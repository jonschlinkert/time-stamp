/*!
 * time-stamp <https://github.com/jonschlinkert/time-stamp>
 *
 * Copyright (c) 2015-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var dateRegex = /(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/g;
var timezoneHoursShift = 0;
var timespan = {
  YYYY: ['getFullYear', 4],
  YY: ['getFullYear', 2],
  MM: ['getMonth', 2, 1], // getMonth is zero-based, thus the extra increment field
  DD: ['getDate', 2],
  HH: ['getHours', 2],
  mm: ['getMinutes', 2],
  ss: ['getSeconds', 2],
  ms: ['getMilliseconds', 3]
};

var timestamp = function(str, date, utc) {
  if (typeof str !== 'string') {
    date = str;
    str = 'YYYY-MM-DD';
  }

  if (!date) date = new Date();
  if (timezoneHoursShift !== 0) {
    var tempDate = new Date(date);
    if (!utc) {
      tempDate.setHours(tempDate.getUTCHours() + timezoneHoursShift);
    } else {
      tempDate.setHours(tempDate.getUTCHours() + timezoneHoursShift - date.getTimezoneOffset() / 60);
    }
    date = tempDate;
  }
  return str.replace(dateRegex, function(match, key, rest) {
    var args = timespan[key];
    var name = args[0];
    var chars = args[1];
    if (utc === true) name = 'getUTC' + name.slice(3);
    var val = '00' + String(date[name]() + (args[2] || 0));
    return val.slice(-chars) + (rest || '');
  });
};

timestamp.utc = function(str, date) {
  return timestamp(str, date, true);
};

timestamp.setTimeZone = function (hourDifference) {
  timezoneHoursShift = hourDifference;
};

module.exports = timestamp;
