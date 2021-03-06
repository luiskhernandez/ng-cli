// Generated by CoffeeScript 1.7.1
(function() {
  "use strict";
  var Controller, Promise, Runner, runner, _;

  _ = require("lodash");

  Promise = require("bluebird");

  Runner = require("../../util/Runner");

  runner = new Runner();


  /**
     * Class to fetch and run hooks registered for generate:controller process/command
     * @class Controller
     * @constructor
   */

  Controller = (function() {
    function Controller() {}


    /**
       * @method run
       * @param args {Object} accept arguments passed with generate:controller command
       * @description Entry point to generate:controller command and run all registered hooks
     */

    Controller.prototype.run = function(args) {
      runner.sortModules("generate:controller").then(function(hooks_to_proccess) {
        if (_.size(hooks_to_proccess) > 0) {
          runner.getConfig(function(err, ngconfig) {
            if (err) {
              runner.trace(err);
            } else {
              runner.run("generate:controller", hooks_to_proccess, ngconfig, args);
            }
          });
        } else {
          runner.notify("warn", "0 hooks configured for this proccess");
          process.exit(1);
        }
      })["catch"](function(err) {
        runner.trace(err);
        process.exit(1);
      });
    };

    return Controller;

  })();

  module.exports = Controller;

}).call(this);
