/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import('vendor/bootstrap-color-picker/bootstrap-colorpicker.min.js');
  app.import('vendor/bootstrap-color-picker/bootstrap-colorpicker.min.css.map');
  app.import('vendor/bootstrap-color-picker/bootstrap-colorpicker.min.css');

  return app.toTree();
};
