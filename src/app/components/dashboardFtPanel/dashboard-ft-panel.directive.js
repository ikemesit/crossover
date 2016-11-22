(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardFtPanel', dashboardFtPanel);

  /** @ngInject */
  function dashboardFtPanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboardFtPanel/dashboard-ft-panel.template.html',
      scope: {
        value               : "<",
        state               : "<",
        passed              : "<",
        failed              : "<",
        code                : "<",
        percent             : "<",
        chart               : "<"
      },
      controller: DashboardFtPanelController,
      controllerAs: 'dbfp',
      link: dbfpLinkFunc,
      bindToController: true
    };

    return directive;

    function dbfpLinkFunc(){
      
    }

    /** @ngInject */
    function DashboardFtPanelController() {
      var vm = this;
      vm.colors = ["#548039", "#EB7D3B"];

    }
  }
})();
