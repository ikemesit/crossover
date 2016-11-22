(function() {
  'use strict';

  /**
   * @todo 
   * More comprehensive tests
   * 
   */

  describe('directive dashboardItem', function() {
    var vm;
    var el;

    beforeEach(module('crossover'));
    beforeEach(inject(function($compile, $rootScope) {

      el = angular.element('<dashboard-item dashboard-item-data="[\'test1\', \'test2\']"></dashboard-item>');

      $compile(el)($rootScope.$new());
      $rootScope.$digest();
      vm = el.isolateScope().dbi;
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    it('should have isolate scope object with passed data', function() {
      expect(vm).toEqual(jasmine.any(Object));
      expect(vm.dashboardItemData).toEqual(jasmine.any(Array));
      expect(vm.dashboardItemData.length).toEqual(2);
    });

  });
})();
