(function () {
  'use strict';

  angular
    .module('tape.core')
    .config(config)
    .run(runBlock);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  }

  function runBlock() {

  }
})();
