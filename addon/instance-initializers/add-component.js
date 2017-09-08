import Ember from 'ember';

export function initialize(applicationInstance) {
  const service = applicationInstance.lookup('service:configuration');
  service.get('pluginSettings').addObject('color-picker');
}

export default {
  name: 'add-component',
  initialize
};
