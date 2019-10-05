import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  loadTime: null,

  mergedProperties: ["needs"],

  refreshLoadTime: function () {
    this.set('loadTime', new Date());
  },

  //TODO - Find a better alternative to detect property change in a model
  _notifyProperties: function (keys) {
    this.refreshLoadTime();
    return this._super(keys);
  },

  didLoad: function () {
    this.refreshLoadTime();
  },

  entityID: DS.attr("string"),

  index: Ember.computed("entityID", function () {
    var id = this.get("entityID") || "";
    return id.substr(id.lastIndexOf('_') + 1);
  }),

  status: DS.attr("string"),
  isComplete: Ember.computed("status", function () {
    switch(this.get("status")) {
      case "SUCCEEDED":
      case "FINISHED":
      case "FAILED":
      case "KILLED":
      case "ERROR":
        return true;
    }
    return false;
  }),

});
