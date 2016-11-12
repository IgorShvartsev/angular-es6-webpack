
class AppController {
	constructor(localStorageService) {
		"ngInject";
		this.welcome = 'Angular 1.5 base application';
		this.isNavCollapsed = true;
	}
}

export const apl = {
    template: require('../view/main-layout.html'),
    controller: AppController
};