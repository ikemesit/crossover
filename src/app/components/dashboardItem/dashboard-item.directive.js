(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardItem', dashboardItem);

  /** @ngInject */
  function dashboardItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboardItem/dashboard-item.template.html',
      scope: {
          
      },
      controller: DashboardItemController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function DashboardItemController() {
      var vm = this;

    }
  }
})();
