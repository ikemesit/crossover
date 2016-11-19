(function() {
  'use strict';

  angular
    .module('crossover')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
