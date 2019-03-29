/* jshint node: true */
'use strict';

module.exports = {
  name: 'explorviz-frontend-extension-colorpicker',

  isDevelopingAddon() {
    return true;
  },

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/bootstrap-colorpicker/bootstrap-colorpicker.min.js');
    app.import('vendor/bootstrap-colorpicker/bootstrap-colorpicker.min.css');
  }
};
