import Component from '@ember/component';
import layout from '../../templates/components/configuration/colorpicker-settings';
import { inject as service } from '@ember/service';


/**
 * The Colorpicker component handles the colorpicker elements for the colors uses in the visualization
 * @class Configuration-Service
 * @extends Ember.Service
 */
export default Component.extend({
  layout,
  configuration: service("configuration"),


  actions: {

    // applies a selected color scheme to the colorpickers and reset the stored colors
    applyColorScheme(value) {
      if (value === "default") {
        this.get('configuration').resetColors();
      }

      else if (value === "impaired") {
        this.get('configuration').applyVisuallyImpairedColors();
      }
      else {
        // passed color scheme was invalid
        return;
      }

      // update landscape colorpickers
      this.$('#cp-landscape-system').colorpicker('setValue', this.get('configuration.landscapeColors.system'));
      this.$('#cp-landscape-nodegroup').colorpicker('setValue', this.get('configuration.landscapeColors.nodegroup'));
      this.$('#cp-landscape-node').colorpicker('setValue', this.get('configuration.landscapeColors.node'));
      this.$('#cp-landscape-application').colorpicker('setValue', this.get('configuration.landscapeColors.application'));
      this.$('#cp-landscape-communication').colorpicker('setValue', this.get('configuration.landscapeColors.communication'));
      this.$('#cp-landscape-text-system').colorpicker('setValue', this.get('configuration.landscapeColors.textsystem'));
      this.$('#cp-landscape-text-node').colorpicker('setValue', this.get('configuration.landscapeColors.textnode'));
      this.$('#cp-landscape-text-app').colorpicker('setValue', this.get('configuration.landscapeColors.textapp'));

      // update application colorpickers
      this.$('#cp-application-foundation').colorpicker('setValue', this.get('configuration.applicationColorsDefault.foundation'));
      this.$('#cp-application-componentOdd').colorpicker('setValue', this.get('configuration.applicationColorsDefault.componentOdd'));
      this.$('#cp-application-componentEven').colorpicker('setValue', this.get('configuration.applicationColorsDefault.componentEven'));
      this.$('#cp-application-clazz').colorpicker('setValue', this.get('configuration.applicationColorsDefault.clazz'));
      this.$('#cp-application-highlightedEntity').colorpicker('setValue', this.get('configuration.applicationColorsDefault.highlightedEntity'));
      this.$('#cp-application-communication').colorpicker('setValue', this.get('configuration.applicationColorsDefault.communication'));
      this.$('#cp-application-communicationArrow').colorpicker('setValue', this.get('configuration.applicationColorsDefault.communicationArrow'));
    },

  },

  // @Override
  didInsertElement() {
    this._super(...arguments);
    this.initColorpicker();
  },

  // @Override
  willDestroyElement() {
    this._super(...arguments);

    // landscape colorpickers
    this.$('#cp-landscape-system').colorpicker().off('change');
    this.$('#cp-landscape-nodegroup').colorpicker().off('change');
    this.$('#cp-landscape-node').colorpicker().off('change');
    this.$('#cp-landscape-application').colorpicker().off('change');
    this.$('#cp-landscape-communication').colorpicker().off('change');
    this.$('#cp-landscape-tesxt-system').colorpicker().off('change');
    this.$('#cp-landscape-text-node').colorpicker().off('change');
    this.$('#cp-landscape-text-app').colorpicker().off('change');

    // application colorpickers
    this.$('#cp-application-foundation').colorpicker().off('change');
    this.$('#cp-application-componentOdd').colorpicker().off('change');
    this.$('#cp-application-componentEven').colorpicker().off('change');
    this.$('#cp-application-clazz').colorpicker().off('change');
    this.$('#cp-application-highlightedEntity').colorpicker().off('change');
    this.$('#cp-application-communication').colorpicker().off('change');
    this.$('#cp-application-communicationArrow').colorpicker().off('change');
  },

  // initializes the colorpicker elements and related handlers/listeners
  initColorpicker() {
    const self = this;
    this.initColorPickerElements(self);
    this.initHandlers(self);
  },

  // configures the colorpicker elements and defines format, color, and fallback color
  initColorPickerElements(self) {

    // landscape colorpickers
    this.$('#cp-landscape-system').colorpicker(
      {
        format: "rgb",
        fallbackColor: self.get('configuration.landscapeColorsDefault.system'),
        color: self.get('configuration.landscapeColors.system')
      }
    );
    this.$('#cp-landscape-nodegroup').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.nodegroup'),
        color: self.get('configuration.landscapeColors.nodegroup')
      }
    );
    this.$('#cp-landscape-node').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.node'),
        color: self.get('configuration.landscapeColors.node')
      }
    );
    this.$('#cp-landscape-application').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.application'),
        color: self.get('configuration.landscapeColors.application')
      }
    );
    this.$('#cp-landscape-communication').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.communication'),
        color: self.get('configuration.landscapeColors.communication')
      }
    );
    this.$('#cp-landscape-text-system').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.textsystem'),
        color: self.get('configuration.landscapeColors.textsystem')
      }
    );
    this.$('#cp-landscape-text-node').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.textnode'),
        color: self.get('configuration.landscapeColors.textnode')
      }
    );
    this.$('#cp-landscape-text-app').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.landscapeColorsDefault.textapp'),
        color: self.get('configuration.landscapeColors.textapp')
      }
    );

    // application colorpickers
    this.$('#cp-application-foundation').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.foundation'),
        color: self.get('configuration.applicationColors.foundation')
      }
    );
    this.$('#cp-application-componentOdd').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.componentOdd'),
        color: self.get('configuration.applicationColors.componentOdd')
      }
    );
    this.$('#cp-application-componentEven').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.componentEven'),
        color: self.get('configuration.applicationColors.componentEven')
      }
    );
    this.$('#cp-application-clazz').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.clazz'),
        color: self.get('configuration.applicationColors.clazz')
      }
    );
    this.$('#cp-application-highlightedEntity').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.highlightedEntity'),
        color: self.get('configuration.applicationColors.highlightedEntity')
      }
    );
    this.$('#cp-application-communication').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.communication'),
        color: self.get('configuration.applicationColors.communication')
      }
    );
    this.$('#cp-application-communicationArrow').colorpicker(
      {
        format: "rgb",
        fallbackColor: this.get('configuration.applicationColorsDefault.communicationArrow'),
        color: self.get('configuration.applicationColors.communicationArrow')
      }
    );
  },

  // setups the handlers / listeners for the colorpickers
  // 
  initHandlers(self) {

    // landscape colorpickers
    this.$('#cp-landscape-system').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.system', event.value);
    });

    this.$('#cp-landscape-nodegroup').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.nodegroup', event.value);
    });

    this.$('#cp-landscape-node').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.node', event.value);
    });

    this.$('#cp-landscape-application').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.application', event.value);
    });

    this.$('#cp-landscape-communication').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.communication', event.value);
    });

    this.$('#cp-landscape-text-system').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.textchanged', true);
      self.set('configuration.landscapeColors.textsystem', event.value);
    });

    this.$('#cp-landscape-text-node').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.textchanged', true);
      self.set('configuration.landscapeColors.textnode', event.value);
    });

    this.$('#cp-landscape-text-app').colorpicker().on('change', function (event) {
      self.set('configuration.landscapeColors.textchanged', true);
      self.set('configuration.landscapeColors.textapp', event.value);
    });

    // application colorpickers
    this.$('#cp-application-foundation').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.foundation', event.value);
    });

    this.$('#cp-application-componentOdd').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.componentOdd', event.value);
    });

    this.$('#cp-application-componentEven').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.componentEven', event.value);
    });

    this.$('#cp-application-clazz').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.clazz', event.value);
    });

    this.$('#cp-application-highlightedEntity').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.highlightedEntity', event.value);
    });

    this.$('#cp-application-communication').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.communication', event.value);
    });

    this.$('#cp-application-communicationArrow').colorpicker().on('change', function (event) {
      self.set('configuration.applicationColors.communicationArrow', event.value);
    });

  }

});