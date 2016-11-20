(function() {
  'use strict';

  angular
    .module('crossover')
    .factory('dataService', dataService);

  /** @ngInject */
  function dataService($log, $http) {
    var apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';

    var service = {
      apiHost: apiHost,
      getData: getData
    };

    return service;

    function getData(limit) {
      if (!limit) {
        limit = 30;
      }

      return $http.get(apiHost + '/contributors?per_page=' + limit)
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
