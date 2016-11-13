import {appModule, loadModuleAssets} from '../bootstrap';
/* components */
import {apl} from './component/main';
import {appHeader} from './component/header-footer/app-header';
import {appFooter} from './component/header-footer/app-footer';
/* config */
import {appRoute} from './config/route';
/* constants */
import {appConfig} from './config/app-config';
import {consts} from './config/constant';
/* controller */
import {AppCtrl} from './controller/AppCtrl';
/* run */
import {viewContentLoaded} from './run/view-content-loaded';


loadModuleAssets(appModule, {
	'constants' : {consts, appConfig},
	'components': {apl, appHeader, appFooter},
	'config': [appRoute],
	'run'   : [viewContentLoaded]
}).controller('AppCtrl', AppCtrl);

export default appModule.name;