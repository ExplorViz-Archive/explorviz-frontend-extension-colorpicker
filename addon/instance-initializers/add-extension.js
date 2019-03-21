import Router from "explorviz-frontend/router";

export function initialize(appInstance) {

  // configuration extension description object  
  // contains the name of it's name and it's title
  const extensionDescription = {
    id: 'colorpicker',
    title: 'Color Picker',
    link: 'configuration.colorpicker',
    nestedRoute: 'colorpicker',
    paneName: 'colorPickerPane'
  };

  // adding the extension as a tab in the configuration ui
  const service = appInstance.lookup('service:configuration');
  service.get('configurationExtensions').addObject(extensionDescription);
  Router.configurationRouteExtensions.push('colorpicker');
}

export default {
  name: 'explorviz-frontend-extension-colorpicker',
  after: 'router',
  initialize
};
