(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardUtPanel', dashboardUtPanel);

  /** @ngInject */
  function dashboardUtPanel() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboardUtPanel/dashboard-ut-panel.template.html',
      scope: {
        value               : "<",
        state               : "<",
        passed              : "<",
        failed              : "<",
        code                : "<",
        percent             : "<",
        chart               : "<"
      },
      controller: DashboardUtPanelController,
      controllerAs: 'dbup',
      link: dbupLinkFunc,
      bindToController: true
    };

    return directive;

    function dbupLinkFunc(){
      
    }

    /** @ngInject */
    function DashboardUtPanelController() {
      var vm = this;
      vm.colors = ["#548039", "#EB7D3B"];

    }
  }
})();
