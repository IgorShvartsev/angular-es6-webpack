
export const appRoute = [
	'$stateProvider', 
	'$urlRouterProvider',
	'$locationProvider',
	'consts', 
	($stateProvider, $urlRouterProvider, $locationProvider, consts) => { 
		if (NODE_ENV == consts.ENV_PROD) {
			$locationProvider.html5Mode(true).hashPrefix('!');
		}
		$urlRouterProvider.otherwise(function($injector, $location){
			if ($location.$$path == '') {
				return '/';
			}
        	return '/404';
    	});
	}
];
