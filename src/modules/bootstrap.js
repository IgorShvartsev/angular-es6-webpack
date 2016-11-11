import ang from 'angular';
import ngResource from 'angular-resource';
import LocalStorageModule from 'angular-local-storage';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import uiBootstrap from 'angular-ui-bootstrap';
import uiRouter from 'angular-ui-router';


/**
* Reexport angular lib
*/
export const angular = ang;

/**
*  Main application module
*/
export const appModule = angular.module("app", [
  LocalStorageModule,
  ngAnimate,
  ngTouch,
  uiBootstrap,
  uiRouter,
  ngResource
]);

/**
*  Initial empty assets of the module
*/
const MODULE_ASSETS = {
  states: [],
  constants:{},
  components: {},
  directives: {},
  services: {},
  filters: {},
  config: [],
  run: []
};

/**
 * Register each  module's states, directives, components, filters, services,
 * and config/run blocks with the `ngModule`
 *
 * @param ngModule the `angular.module()` object
 * @param moduleAssets array consisting of components, states, services, etc
 */
export function loadModuleAssets(ngModule, moduleAssets) {
  let module = Object.assign({}, MODULE_ASSETS, moduleAssets);

  ngModule.config(['$stateProvider', $stateProvider => module.states.forEach(state => $stateProvider.state(state))]);
  
  Object.keys(module.constants).forEach(name => ngModule.constant(name, module.constants[name]));
  Object.keys(module.components).forEach(name => ngModule.component(name, module.components[name]));
  Object.keys(module.directives).forEach(name => ngModule.directive(name, module.directives[name]));
  Object.keys(module.services).forEach(name => ngModule.service(name, module.services[name]));
  Object.keys(module.filters).forEach(name => ngModule.filter(name, module.filters[name]));

  module.config.forEach(config => ngModule.config(config));
  module.run.forEach(run => ngModule.run(run));

  return ngModule;
}
