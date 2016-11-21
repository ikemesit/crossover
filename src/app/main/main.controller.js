(function() {
  'use strict';

  angular
    .module('crossover')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $log, dataService) {
    var vm = this;
    vm.data = null;
    

    getDashboardData();

    function getDashboardData(){
      dataService.getData().then(function(response){
        vm.data = angular.fromJson(response);
      });
    }

    
  }
})();
