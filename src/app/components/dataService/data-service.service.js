(function() {
  'use strict';

  angular
    .module('crossover')
    .factory('dataService', dataService);

  /** @ngInject */
  function dataService($log, $http) {
    var apiHost = 'app/components/mockData/data.json';

    var service = {
      apiHost: apiHost,
      getData: getData
    };

    return service;

    function getData() {
      
      return $http.get(apiHost)
        .then(getDataComplete)
        .catch(getDataFailed);

      function getDataComplete(response) {
        return response.data;
      }

      function getDataFailed(error) {
        $log.error('XHR Failed for getData.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
