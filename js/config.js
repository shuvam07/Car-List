// Original concepts provided by Backbone Boilerplate project: https://github.com/tbranyen/backbone-boilerplate
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  baseUrl: "js",

  paths: {
    // Libraries
    jquery: "../lib/jquery.min",
    lodash: "../lib/lodash.min",
    backbone: "../lib/backbone.min"
  },

  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    }
  }
});
