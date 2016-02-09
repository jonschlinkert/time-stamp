/*!
 * time-stamp <https://github.com/jonschlinkert/time-stamp>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

require('mocha');
var assert = require('assert');
var pad = require('pad-left');
var timestamp = require('./');

describe('timestamp', function() {
  it('should return the default timestamp:', function() {
    assert(/^\d{4}:\d{2}:\d{2}$/, timestamp());
  });

  it('should return the year:', function() {
    assert(/^\d{4}$/.test(timestamp('YYYY')));
  });

  it('should return the month:', function() {
    assert(/^\d{2}$/.test(timestamp('MM')));
  });

  it('should return the day:', function() {
    assert(/^\d{2}$/.test(timestamp('DD')));
  });

  it('should return hours:', function() {
    assert(/^\d{2}$/.test(timestamp('HH')));
  });

  it('should return minutes:', function() {
    assert(/^\d{2}$/.test(timestamp('mm')));
  });

  it('should return seconds:', function() {
    assert(/^\d{2}$/.test(timestamp('ss')));
  });

  it('should return miliseconds:', function() {
    assert(/^\d{3}$/.test(timestamp('ms')));
  });

  it('should increment zero-based month:', function() {
    var expected = String(new Date().getMonth() + 1);
    assert.equal(timestamp('MM'), pad(expected, 2, '0'));
  });

  it('should not increment one-based methods:', function() {
    var expected = String(new Date().getFullYear());
    assert.equal(timestamp('YYYY'), pad(expected, 4, '0'));
  });
});
