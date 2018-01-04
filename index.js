/* jshint node: true */
'use strict';

module.exports = {
  name: 'explorviz-frontend-extension-colorpicker',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/bootstrap-color-picker/bootstrap-colorpicker.min.js');
    app.import('vendor/bootstrap-color-picker/bootstrap-colorpicker.min.css.map');
    app.import('vendor/bootstrap-color-picker/bootstrap-colorpicker.min.css');
  }
};
