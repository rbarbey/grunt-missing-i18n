/*
 * grunt-missing-i18n
 *
 * Copyright (c) 2014 Robert Barbey
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var missingI18n = require('./lib/missing-i18n');

  function logNumFiles(numFiles) {
    return numFiles + ' ' + grunt.util.pluralize(numFiles, 'file/files');
  }

  grunt.registerMultiTask('missingI18n', 'Find files with unlocalized UI strings.', function() {
    var done = this.async();

    missingI18n.findMissingI18n(this.filesSrc, function(results) {
      var numFiles = Object.size(results);
      if (numFiles > 0) {
        grunt.log.error('Found missing translations in ' + logNumFiles(numFiles));
        Object.each(results, function (result) {
          grunt.log.error(result);

          var missingTranslations = results[result];
          missingTranslations.forEach(function (missing) {
            console.log('\t' + missing);
          });
        });
      } else {
        grunt.log.ok('No missing translations in ' + logNumFiles);
      }

      done(numFiles);
    });
  });
};
