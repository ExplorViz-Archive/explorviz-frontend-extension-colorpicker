import Component from '@ember/component';
import layout from '../../templates/components/configuration/colorpicker-settings';
import { inject as service } from '@ember/service';
import $ from 'jquery';

/**
 * The Colorpicker component handles the colorpicker elements for the colors uses in the visualization
 * @class Configuration-Service
 * @extends Ember.Service
 */
export default Component.extend({

  layout,
  configuration: service("configuration"),

  actions: {
    // Applies a selected color scheme to the colorpickers and reset the stored colors
    applyColorScheme(value) {
      if (value === "default") {
        this.get('configuration').resetColors();
      }
      else if (value === "impaired") {
        this.get('configuration').applyVisuallyImpairedColors();
      }
      else {
        // Passed color scheme was invalid
        return;
      }
    },
  },

  // @Override
  didInsertElement() {
    this._super(...arguments);
    this.initColorpicker();
  },

  // Initializes the colorpicker elements and related handlers/listeners
  initColorpicker() {
    const self = this;
    this.initColorPickerElements(self);
    this.initHandlers(self);
  },

  // Configures the colorpicker elements and defines format, color, and fallback color
  initColorPickerElements(self) {
    let landscapeColors = this.get('configuration.landscapeColors');
    // Initialize landscape colorpickers
    for (let property in landscapeColors) {
      $(`#cp-landscape-${property}`).colorpicker(
        {
          format: "rgb",
          fallbackColor: self.get('configuration.landscapeColorsDefault.' + property),
          color: self.get('configuration.landscapeColors.' + property)
        }
      );
    }

    let applicationColors = this.get('configuration.applicationColors');
    // Initialize application colorpickers
    for (let property in applicationColors) {
      $(`#cp-application-${property}`).colorpicker(
        {
          format: "rgb",
          fallbackColor: self.get('configuration.applicationColorsDefault.' + property),
          color: self.get('configuration.applicationColors.' + property)
        }
      );
    }
  },

  // Setups the handlers / listeners for the colorpickers
  initHandlers(self) {
    // Landscape color handlers
    let landscapeColors = this.get('configuration.landscapeColors');
    for (let property in landscapeColors) {
      $(`#cp-landscape-${property}`).colorpicker().on('change', function (event) {
        self.set('configuration.landscapeColors.' + property, event.value);
      });
    }

    // Application color Handlers
    let applicationColors = this.get('configuration.applicationColors');
    for (let property in applicationColors) {
      $(`#cp-application-${property}`).colorpicker().on('change', function (event) {
        self.set('configuration.applicationColors.' + property, event.value);
      });
    }
  },

  // @Override
  willDestroyElement() {
    this._super(...arguments);

    // Reset landscape color handlers
    let landscapeColors = this.get('configuration.landscapeColors');
    for (let property in landscapeColors) {
      $(`#cp-landscape-${property}`).colorpicker().off('change');
    }

    // Reset application color handlers
    let applicationColors = this.get('configuration.applicationColors');
    for (let property in applicationColors) {
      $(`#cp-application-${property}`).colorpicker().off('change');
    }
  },

});