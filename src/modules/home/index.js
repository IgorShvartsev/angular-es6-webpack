import {angular, appModule, loadModuleAssets} from '../bootstrap';
import uiRouter from 'angular-ui-router';
import {homeState} from './state/home-state';
import {HomeCtrl} from './controller/HomeCtrl';

const moduleName = 'app.home';

const homeModule = angular.module(moduleName, [uiRouter]);
appModule.requires.push(moduleName);

loadModuleAssets(homeModule, {
	'states': [homeState]
}).controller('HomeCtrl', HomeCtrl);

export default homeModule.name;
