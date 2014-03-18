'use strict';

var fs = require('fs');
var sugar = require('sugar');

exports.init = function(grunt) {
  exports.findMissingI18n = function(files, done) {
    var results = {};

    for (var i = 0; i < files.length; ++i) {
      var content = fs.readFileSync(files[i], 'utf8');
      var stripped = content.stripTags();
      if (stripped.lines().length > 0) {
        results[files[i]] = stripped.lines();
      }
    }

    done(results);
  };

  return exports;
};
