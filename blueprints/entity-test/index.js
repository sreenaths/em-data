/*jshint node:true*/

var testInfo = require('ember-cli-test-info');

module.exports = {
  description: 'Generate an entity unit test.',

  locals: function(options) {
    return {
      friendlyTestDescription: testInfo.description(options.entity.name, "Unit", "Entity")
    };
  },

  // afterInstall: function(options) {
  //   // Perform extra work here.
  // }
};
