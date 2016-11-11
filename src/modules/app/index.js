import {appModule, loadModuleAssets} from '../bootstrap';
import {consts} from './config/constant';
import {config} from './config/config';
import {appRoute} from './config/route';
import {apl} from './component/main';
import {AppCtrl} from './controller/AppCtrl';

loadModuleAssets(appModule, {
	'constants' : {consts, config},
	'components': {apl},
	'config': [appRoute]
}).controller('AppCtrl', AppCtrl);

export default appModule.name;