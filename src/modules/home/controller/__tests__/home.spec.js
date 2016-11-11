import home from '../../index';
describe('Home Controller', () => {
  let controller;
  // init mock
  beforeEach(() => {
    angular.mock.module(home);
    angular.mock.inject((_$controller_, _$location_) => {
      controller = _$controller_('HomeCtrl', { $location: _$location_ });
    });
  });

  // series of tests
  describe('property', () => {
    it('"headline" should be defined', () => {
      expect(controller.headline).toBeDefined();
    });
  });
  describe('property', () => {
    it('"intro" should be defined', () => {
      expect(controller.intro).toBeDefined();
    });
  });
});