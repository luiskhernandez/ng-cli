// Generated by CoffeeScript 1.7.1
(function() {
  "use strict";
  var Directive, LineUp, Promise, Runner, lineup, runner, _;

  _ = require("lodash");

  Promise = require("bluebird");

  Runner = require("../../util/Runner");

  runner = new Runner();

  LineUp = require("lineup");

  lineup = new LineUp();


  /**
     * Class to fetch and run hooks registered for generate:directive process/command
     * @class Directive
     * @constructor
   */

  Directive = (function() {
    function Directive() {}


    /**
       * @method run
       * @param args {Object} accept arguments passed with generate:directive command
       * @description Entry point to generate:directive command and run all registered hooks
     */

    Directive.prototype.run = function(args) {
      runner.sortModules("generate:directive").then(function(hooks_to_proccess) {
        if (_.size(hooks_to_proccess) > 0) {
          runner.getConfig(function(err, ngconfig) {
            if (err) {
              runner.trace(err);
            } else {
              runner.run("generate:directive", hooks_to_proccess, ngconfig, args);
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

    return Directive;

  })();

  module.exports = Directive;

}).call(this);
