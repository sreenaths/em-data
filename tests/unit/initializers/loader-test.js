import Ember from 'ember';
import LoaderInitializer from '../../../initializers/loader';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | loader', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  LoaderInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});