(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardBuildPanel', dashboardBuildPanel);

  /** @ngInject */
  function dashboardBuildPanel() {
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

    function dbbpLinkFunc(){
      
    }

    /** @ngInject */
    function DashboardBuildPanelController() {
  
    }
  }
})();
