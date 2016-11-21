(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardBuildPanel', dashboardBuildPanel);

  /** @ngInject */
  function dashboardBuildPanel($log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboardBuildPanel/dashboard-build-panel.template.html',
      scope: {
        value               : "<",
        state               : "<",
        time                : "<",
        date                : "<"
      },
      controller: DashboardBuildPanelController,
      controllerAs: 'dbbp',
      link: dbbpLinkFunc,
      bindToController: true
    };

    return directive;

    function dbbpLinkFunc(scope, element){
      
    }

    /** @ngInject */
    function DashboardBuildPanelController() {
      var vm = this;

    }
  }
})();
