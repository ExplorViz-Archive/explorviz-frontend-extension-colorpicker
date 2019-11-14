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
        this.updateColorPickerElements();
      }
      else if (value === "impaired") {
        this.applyVisuallyImpairedColors();
        this.updateColorPickerElements();
      }
      else {
        // Passed color scheme was invalid
        return;
      }
    }
  },

  // @Override
  didInsertElement() {
    this._super(...arguments);
    this.initColorpicker();
  },

  // Initializes the colorpicker elements and related handlers/listeners
  initColorpicker() {
    this.initColorPickerElements();
  },

  // Configures the colorpicker elements and defines format, color, and fallback color
  initColorPickerElements() {
    let landscapeColors = this.get('configuration.landscapeColors');
    // Initialize landscape colorpickers
    for (let property in landscapeColors) {
      $(`#cp-landscape-${property}`).colorpicker(
        {
          format: "rgb",
          fallbackColor: this.get('configuration.landscapeColorsDefault.' + property),
          color: this.get('configuration.landscapeColors.' + property)
        }
      );
    }

    let applicationColors = this.get('configuration.applicationColors');
    // Initialize application colorpickers
    for (let property in applicationColors) {
      $(`#cp-application-${property}`).colorpicker(
        {
          format: "rgb",
          fallbackColor: this.get('configuration.applicationColorsDefault.' + property),
          color: this.get('configuration.applicationColors.' + property)
        }
      );
    }
  },

  updateColorPickerElements() {
    let landscapeColors = this.get('configuration.landscapeColors');
    // update landscape colorpickers' values
    for (let property in landscapeColors) {
      $(`#cp-landscape-${property}`).colorpicker('setValue', this.get('configuration.landscapeColors.' + property));
    }

    let applicationColors = this.get('configuration.applicationColors');
    // Initialize application colorpickers' values
    for (let property in applicationColors) {
      $(`#cp-application-${property}`).colorpicker('setValue', this.get('configuration.applicationColors.' + property));
    }
  },

  /**
 * Sets the current colors towards more visually impaired ones
 */
  applyVisuallyImpairedColors() {
    this.set('configuration.landscapeColors', {
      system: "rgb(199, 199, 199)",
      nodegroup: "rgb(1, 90, 110)",
      node: "rgb(0, 150, 190)",
      application: "rgb(95, 95, 95)",
      communication: "rgb(244, 145, 0)",
      systemText: "rgb(0, 0, 0)",
      nodeText: "rgb(255, 255, 255)",
      applicationText: "rgb(255, 255, 255)",
      collapseSymbol: "rgb(0, 0, 0)",
      background: "rgb(255, 255, 255)"
    });

    this.set('configuration.applicationColors', {
      foundation: "rgb(199, 199, 199)",
      componentOdd: "rgb(1, 90, 110)",
      componentEven: "rgb(0, 150, 190)",
      clazz: "rgb(95, 95, 95)",
      highlightedEntity: "rgb(255, 0, 0)",
      componentText: "rgb(255, 255, 255)",
      clazzText: "rgb(255, 255, 255)",
      foundationText: "rgb(0, 0, 0)",
      communication: "rgb(244, 145, 0)",
      communicationArrow: "rgb(0, 0, 0)",
      background: "rgb(255, 255, 255)"
    });
  }

});