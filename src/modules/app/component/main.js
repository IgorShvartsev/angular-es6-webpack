
class AppController {
	constructor(localStorageService) {
		"ngInject";
		this.welcome = 'Angular 1.5 base application';
	}
}

export const apl = {
    template: require('../view/main-layout.html'),
    controller: AppController
};