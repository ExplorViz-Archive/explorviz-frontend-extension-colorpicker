import Router from "explorviz-frontend/router";

export function initialize(appInstance) {

  // configuration plugin description object  
  // contains the name of it's name and it's title
  const pluginDescription = {
    id: 'colorpicker',
    title: 'Color Picker',
    link: 'configuration.colorpicker',
    nestedRoute: 'colorpicker',
    paneName: 'colorPickerPane'
  };

  const service = appInstance.lookup('service:configuration');
  service.get('pluginSettings').addObject(pluginDescription);

  // add subroute to route 'confguration'
  Router.map(function () {

    // TODO 
    // working - if the whole configuration is used from frontend and colorpicker is added
    this.route('configuration', function() {
      this.route('usermanagement', function() {
        this.route('users');
        this.route('edit', { path: '/edit/:user_id' });
        this.route('new');
      });
      this.route('settings');
      this.route(pluginDescription.nestedRoute);
    });

  });

}

export default {
  name: 'explorviz-frontend-extension-colorpicker',
  initialize
};
