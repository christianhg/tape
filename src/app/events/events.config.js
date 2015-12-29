(function() {
  'use strict';

  angular
    .module('tape.events')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('events', {
        url: 'events',
        templatUrl: 'events/events.view.html',
        controller: 'EventsController',
        controllerAs: 'vm'
      });
  }
})();
