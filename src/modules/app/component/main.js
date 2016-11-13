
class AppController {
	constructor(localStorageService) {
		"ngInject";
		let ctrl = this;

		ctrl.isNavCollapsed = true;
	}
}

export const apl = {
    template: require('../view/main.html'),
    controller: AppController
};