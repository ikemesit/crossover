(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardMetricsPanel', dashboardMetricsPanel);

  /** @ngInject */
  function dashboardMetricsPanel($log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboardMetricsPanel/dashboard-metrics-panel.template.html',
      scope: {
        value               : "<",
        state               : "<",
        test                : "<",
        maintainability     : "<",
        security            : "<",
        workmanship         : "<",
      },
      controller: DashboardMetricsPanelController,
      controllerAs: 'dbmp',
      link: dbmpLinkFunc,
      bindToController: true
    };

    return directive;

    function dbmpLinkFunc(scope, element){
      
    }

    /** @ngInject */
    function DashboardMetricsPanelController() {
      var vm = this;

    }
  }
})();
