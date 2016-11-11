import app from '../../index';
describe('Application Controller', () => {
  let controller;
  beforeEach(() => {
    angular.mock.module(app);
    angular.mock.inject((_$controller_, _$rootScope_, _$location_) => {
      let scope = _$rootScope_.$new();
      controller = _$controller_('AppCtrl', { $location: _$location_, $scope : scope });
    })
  });

  it('some test here', () => {
      expect(1 + 2).toBe(3);
  });
});