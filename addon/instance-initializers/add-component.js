export function initialize(appInstance) {
  const service = appInstance.lookup('service:configuration');
  service.get('pluginSettings').addObject('color-picker');
}

export default {
  name: 'add-component',
  initialize
};
