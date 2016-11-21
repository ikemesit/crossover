(function() {
  'use strict';

  describe('service dataService', function() {
    var dataService;
    var $httpBackend;
    var $log;

    beforeEach(module('crossover'));
    beforeEach(inject(function(_dataService_, _$httpBackend_, _$log_) {
      dataService = _dataService_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    it('should be registered', function() {
      expect(dataService).not.toEqual(null);
    });

    describe('apiHost variable', function() {
      it('should exist', function() {
        expect(dataService.apiHost).not.toEqual(null);
      });
    });

    describe('dataService getData function', function() {
      it('should exist', function() {
        expect(dataService.getData).not.toEqual(null);
      });

      it('should return data', function() {
        $httpBackend.when('GET',  dataService.apiHost).respond(200, [{pprt: 'value'}]);
        var data;
        dataService.getData().then(function(fetchedData) {
          data = fetchedData;
        });
        $httpBackend.flush();
        expect(data).toEqual(jasmine.any(Array));
        expect(data.length >= 1).toBeTruthy();
        expect(data[0]).toEqual(jasmine.any(Object));
      });

      it('should log a error', function() {
        $httpBackend.when('GET',  dataService.apiHost).respond(500);
        dataService.getData();
        $httpBackend.flush();
        expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for'));
      });
    });
  });
})();
