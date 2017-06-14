import Ember from 'ember';

export default Ember.Component.extend({

  configuration: Ember.inject.service("configuration"),

  template: '<div class="colorpicker dropdown-menu">' +
    '<div class="colorpicker-saturation"><i><b></b></i></div>' +
    '<div class="colorpicker-hue"><i></i></div>' +
    '<div class="colorpicker-color"><div /></div>' +
    '<div class="colorpicker-selectors"></div>' + '</div>',

  actions: {
    resetColors() {      
      this.$('#cp1').colorpicker('setValue', "rgb(199,199,199)");
      this.$('#cp2').colorpicker('setValue', "rgb(1,155,32)");
      this.$('#cp3').colorpicker('setValue', "rgb(0,189,56)");
      this.$('#cp4').colorpicker('setValue', "rgb(81,34,183)");
      this.$('#cp5').colorpicker('setValue', "rgb(244,145,0)");
      this.$('#cp6').colorpicker('setValue', "rgb(0,0,0)");
      this.$('#cp7').colorpicker('setValue', "rgb(255,255,255)");
      this.$('#cp8').colorpicker('setValue', "rgb(255,255,255)");
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
  
    this.$('#cp1').colorpicker().off('changeColor');
    this.$('#cp2').colorpicker().off('changeColor');
    this.$('#cp3').colorpicker().off('changeColor');
    this.$('#cp4').colorpicker().off('changeColor');
    this.$('#cp5').colorpicker().off('changeColor');
    this.$('#cp6').colorpicker().off('changeColor');
    this.$('#cp7').colorpicker().off('changeColor');
    this.$('#cp8').colorpicker().off('changeColor');
  },


  initColorpicker() {

    const self = this;

    this.$('#cp1').colorpicker({"template": self.get('template')});
    this.$('#cp2').colorpicker({"template": self.get('template')});
    this.$('#cp3').colorpicker({"template": self.get('template')});
    this.$('#cp4').colorpicker({"template": self.get('template')});
    this.$('#cp5').colorpicker({"template": self.get('template')});
    this.$('#cp6').colorpicker({"template": self.get('template')});
    this.$('#cp7').colorpicker({"template": self.get('template')});
    this.$('#cp8').colorpicker({"template": self.get('template')});

    // Setup Handlers
    this.$('#cp1').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.system', event.value);
    });

    this.$('#cp2').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.nodegroup', event.value);
    });

    this.$('#cp3').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.node', event.value);
    });

    this.$('#cp4').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.application', event.value);
    });

    this.$('#cp5').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.communication', event.value);
    });

    this.$('#cp6').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.textchanged', true);
      self.set('configuration.landscapeColors.textsystem', event.value);
    });

    this.$('#cp7').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.textchanged', true);
      self.set('configuration.landscapeColors.textnode', event.value);
    });

    this.$('#cp8').colorpicker().on('changeColor', function(event){
      self.set('configuration.landscapeColors.textchanged', true);
      self.set('configuration.landscapeColors.textapp', event.value);
    });

    
  }


});
