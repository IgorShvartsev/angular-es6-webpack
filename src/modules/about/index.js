import {angular, appModule, loadModuleAssets} from '../bootstrap';
import uiRouter from 'angular-ui-router';
import {aboutState} from './state/about-state';
import {AboutCtrl} from './controller/AboutCtrl';

const moduleName = 'app.about';

const aboutModule = angular.module(moduleName, [uiRouter]);
appModule.requires.push(moduleName);

loadModuleAssets(aboutModule, {
	'states': [aboutState]
}).controller('AboutCtrl', AboutCtrl);;

export default aboutModule.name;