/*
 * grunt-missing-i18n
 *
 * Copyright (c) 2014 Robert Barbey
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var sugar = require('sugar');

exports.init = function (grunt) {
  exports.findMissingI18n = function (files, done) {
    var results = {};

    for (var i = 0; i < files.length; ++i) {
      if (fs.lstatSync(files[i]).isDirectory()) {
        continue;
      }

      var content = fs.readFileSync(files[i], 'utf8');
      var lines = content.lines();
      if (lines.length === 0) {
        continue;
      }

      var result = [];
      lines.forEach(function (line, lineNum) {
        var stripped =
          line.stripTags() // remove HTML tags,
            .remove(/\{\{.*?\}\}/g); // remove Handlebars helpers

        if (stripped.isBlank()) {
          return;
        }

        result[lineNum+1] = stripped.trim();
      });

      if (result.length > 0) {
        results[files[i]] = result;
      }
    }

    done(results);
  };

  return exports;
};
