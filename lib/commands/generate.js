// Generated by CoffeeScript 1.7.1
(function() {
  var Generate, controllerGenerator, directiveGenerator, factoryGenerator, filterGenerator, initializerGenerator, serviceGenerator;

  controllerGenerator = require("../commands/generate/controller");

  filterGenerator = require("../commands/generate/filter");

  directiveGenerator = require("../commands/generate/directive");

  serviceGenerator = require("../commands/generate/service");

  factoryGenerator = require("../commands/generate/factory");

  initializerGenerator = require("../commands/generate/initializer");

  Generate = (function() {
    function Generate() {}

    Generate.prototype.run = function(parsed) {
      var cg, command, dg, fcg, fg, identifier, ig, sg;
      command = parsed.command.split(":");
      if (command.length > 0) {
        identifier = command[0];
        switch (identifier) {
          case "controller":
            cg = new controllerGenerator();
            cg.run(parsed);
            break;
          case "filter":
            fg = new filterGenerator();
            fg.run(parsed);
            break;
          case "factory":
            fcg = new factoryGenerator();
            fcg.run(parsed);
            break;
          case "service":
            sg = new serviceGenerator();
            sg.run(parsed);
            break;
          case "initializer":
            ig = new initializerGenerator();
            ig.run(parsed);
            break;
          case "directive":
            dg = new directiveGenerator();
            dg.run(parsed);
            break;
          default:
            this.notify("error", "Not a valid generator");
        }
      } else {
        this.notify("error", "Not a valid generator");
      }
    };

    return Generate;

  })();

  module.exports = Generate;

}).call(this);