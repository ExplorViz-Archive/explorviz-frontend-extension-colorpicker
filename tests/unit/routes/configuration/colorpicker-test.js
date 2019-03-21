import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | configuration/colorpicker', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:configuration/colorpicker');
    assert.ok(route);
  });
});
