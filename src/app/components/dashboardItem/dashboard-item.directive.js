(function() {
  'use strict';

  angular
    .module('crossover')
    .directive('dashboardItem', dashboardItem);

  /** @ngInject */
  function dashboardItem($log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/dashboardItem/dashboard-item.template.html',
      scope: {
        dashboardItemData: "<"
      },
      controller: DashboardItemController,
      controllerAs: 'dbi',
      link: dbiLinkFunc,
      bindToController: true
    };

    return directive;

    function dbiLinkFunc(scope, element){
      // Resets item expanded state on focusout
      element.focusout(function(){
        scope.dbi.expanded = false;
        scope.$apply();
      });
    }

    /** @ngInject */
    function DashboardItemController() {
      var vm = this;

      vm.data = vm.dashboardItemData;
      vm.expanded = false;
      vm.itemicon = null;
      vm.utChartData = getUnitTestChartData(); 
      vm.ftChartData = getFunctionalTestChartData();    
            
      // Assign appropriate item icon
      if(vm.data.type === "firewall")
        vm.itemicon = "fa-server";
      else
        vm.itemicon = "fa-television";

      // Public Methods
      vm.expandItem = expandItem;
      

      // Changes items expanded state
      function expandItem(){
        vm.expanded = !vm.expanded;
      }

     function getUnitTestChartData(){
        var data = vm.data['unit_test'];
        var utData = [];
        
        for (var index in data){
          if(index === 'passed' || index === 'failed'){
            utData.push(data[index]);
          }
        }
        return utData;
      }

      function getFunctionalTestChartData(){
        var data = vm.data['functional_test'];
        var ftData = [];
        
        for (var index in data){
          if(index === 'passed' || index === 'failed'){
            ftData.push(data[index]);
          }
        }
        return ftData;
      }



    }
  }
})();
