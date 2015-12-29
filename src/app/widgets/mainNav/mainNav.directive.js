(function() {
  'use strict';

  angular
    .module('tape.widgets')
    .directive('mainNav', mainNav);

  function mainNav() {
    var directive = {
      templateUrl: 'widgets/mainNav/mainNav.view.html',
      restrict: 'E',
      controller: MainNavController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }

  /**
   * @ngInject
   */
  function MainNavController() {
    var vm = this;

    vm.menuOpen = false;
    vm.toggleMenu = toggleMenu;

    ////////////

    function toggleMenu() {
      if(vm.menuOpen) {
        vm.menuOpen = false;
      } else {
        vm.menuOpen = true;
      }
    }
  }
})();
