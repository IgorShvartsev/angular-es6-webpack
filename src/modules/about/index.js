import {angular, appModule, loadModuleAssets} from '../bootstrap';
import uiRouter from 'angular-ui-router';
import {aboutState} from './state/about-state';

const moduleName = 'app.about';

const aboutModule = angular.module(moduleName, [uiRouter]);
appModule.requires.push(moduleName);

loadModuleAssets(aboutModule, {
	'states': [aboutState]
});

export default aboutModule.name;