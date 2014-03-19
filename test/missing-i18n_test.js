/*
 * grunt-missing-i18n
 *
 * Copyright (c) 2014 Robert Barbey
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var grunt = require('grunt');
var sugar = require('sugar');

var missingI18n = require('../tasks/lib/missing-i18n').init(grunt);

var fixtures = path.join(__dirname, 'fixtures');

exports.missingI18n = {
  findsMissingTranslation: function(test) {
    test.expect(2);
    var files = [path.join(fixtures, 'missing-i18n.html')];
    missingI18n.findMissingI18n(files, function(result) {
      test.equal(Object.size(result), 1, 'Should report missing translations for 1 file');
      test.equal(result[files[0]].length, 1, 'Should report 1 missing translation')
      test.done();
    });
  },
  noMissingTranslationInHandlebars: function(test) {
    test.expect(1);

    var files = [path.join(fixtures, 'i18n.hbs')];
    missingI18n.findMissingI18n(files, function(result) {
      test.equal(Object.size(result), 0, 'Should not report missing translation in Handlebars file');
      test.done();
    });
  },
  ignoresDirectories: function(test) {
    test.expect(1);

    var files = [fixtures];
    missingI18n.findMissingI18n(files, function(results) {
      test.ok(Object.isEmpty(results), 'Should ignore directories');
      test.done();
    })
  }
};
