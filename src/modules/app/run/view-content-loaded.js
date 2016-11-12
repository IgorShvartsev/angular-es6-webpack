import {angular} from '../../bootstrap';

export function viewContentLoaded(
	$rootScope,
	$timeout,
	$location,
	$uiViewScroll,
	$window
) {
	"ngInject"

	$rootScope.$on('$viewContentLoaded', () => $timeout(autoScroll, 0));

	let autoScroll = () => {
		let hash = $location.hash();
		let element = null;
		if (hash != '') {
			element = angular.element($window.document.querySelector('#' + hash))
				   || angular.element($window.document.querySelector('a[name="' + hash + '"]'));
		}
		element = element || angular.element($window.document.body);
    	$uiViewScroll(element);
	};
};