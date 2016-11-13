class HeaderController {
	constructor() {
		let ctrl = this;
		const defaultData = {
			'title' : 'Angular 1.5 base application',
			'list'  : [
				'ES6 style',
				'Webpack',
				'Karma'
			]
		};
		ctrl.header = Object.assign({}, defaultData);
		if (typeof ctrl.headerData == 'object') {
			ctrl.header = Object.assign({}, defaultData, ctrl.headerData);
		}
	}
}

export const appHeader = {
    template: require('../../view/header-footer/app-header.html'),
    controller: HeaderController,
    bindings: {
    	headerData : '<'
    }
};