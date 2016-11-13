import {angular, appModule} from '../../bootstrap';

export class AppCtrl {
	constructor($scope, $location, appConfig) {
		// we use "ngInject" annotation instead of /*@ngInject*/
		// because Uglify plugin removes all comments from production release
		"ngInject"
		$scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    			
			if ( angular.isDefined( toState.data ) ) {
				$scope.pageTitle = angular.isDefined( toState.data.pageTitle ) ? (toState.data.pageTitle + ' | ' + appConfig.site) : '';
				$scope.pageDescription = angular.isDefined( toState.data.pageDescription ) ? (toState.data.pageDescription) : '';
    	   		}
		});
	}
}
