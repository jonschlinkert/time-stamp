/*!
 * time-stamp <https://github.com/jonschlinkert/time-stamp>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var assert = require('assert');
var should = require('should');
var timestamp = require('./');

describe('timestamp', function () {
  it('should return the default timestamp:', function () {
    timestamp().should.match(/^\d{4}:\d{2}:\d{2}$/);
  });

  it('should return the year:', function () {
    timestamp('YYYY').should.match(/^\d{4}$/);
  });

  it('should return the month:', function () {
    timestamp('MM').should.match(/^\d{2}$/);
  });

  it('should return the day:', function () {
    timestamp('DD').should.match(/^\d{2}$/);
  });

  it('should return hours:', function () {
    timestamp('HH').should.match(/^\d{2}$/);
  });

  it('should return minutes:', function () {
    timestamp('mm').should.match(/^\d{2}$/);
  });

  it('should return seconds:', function () {
    timestamp('ss').should.match(/^\d{2}$/);
  });

  it('should return miliseconds:', function () {
    timestamp('ms').should.match(/^\d{3}$/);
  });
});
