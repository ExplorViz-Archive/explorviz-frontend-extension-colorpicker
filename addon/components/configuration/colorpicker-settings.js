import Component from '@ember/component';
import layout from '../../templates/components/configuration/colorpicker-settings';
import { inject as service } from '@ember/service';


export default Component.extend({
  layout,
  configuration: service("configuration"),

  actions: {
    resetColors() {

      console.log("color: " + this.get('configuration.landscapeColors.system'));
      console.log("default color: " + this.get('configuration.landscapeColorsDefault.system'));
      this.$('#cp-landscape-system').colorpicker('setValue', "rgb(199, 199, 199)");
      // this.$('#cp-landscape-system').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.system'));
      // this.$('#cp-landscape-nodegroup').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.nodegroup'));
      // this.$('#cp-landscape-node').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.node'));
      // this.$('#cp-landscape-application').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.application'));
      // this.$('#cp-landscape-communication').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.communication'));
      // this.$('#cp-landscape-text-system').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.textsystem'));
      // this.$('#cp-landscape-text-node').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.textnode'));
      // this.$('#cp-landscape-text-app').colorpicker('setValue', this.get('configuration.landscapeColorsDefault.textapp'));

      // resets the colors to default values stored in the configuration service
      this.get('configuration').resetColors();
    }
  },

  // @Override
  didInsertElement() {
    this._super(...arguments);
    this.initColorpicker();
  },

  // @Override
  willDestroyElement() {
    this._super(...arguments);

    this.$('#cp-landscape-system').colorpicker().off('change');
    this.$('#cp-landscape-nodegroup').colorpicker().off('change');
    this.$('#cp-landscape-node').colorpicker().off('change');
    this.$('#cp-landscape-application').colorpicker().off('change');
    this.$('#cp-landscape-communication').colorpicker().off('change');
    this.$('#cp-landscape-tesxt-system').colorpicker().off('change');
    this.$('#cp-landscape-text-node').colorpicker().off('change');
    this.$('#cp-landscape-text-app').colorpicker().off('change');
  },

  // initializes the colorpicker elements and related handlers/listeners
  initColorpicker() {
    const self = this;
    this.initColorPickerElements(self);
    this.initHandlers(self);
  },

  // configures the colorpicker elements and defines format, color, and fallback color
  initColorPickerElements(self) {

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
  },

  // setups the handlers / listeners for the colorpickers
  // 
  initHandlers(self) {

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
  }

});