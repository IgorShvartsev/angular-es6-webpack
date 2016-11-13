export const aboutState = {
    url: '/about',
    name : 'about',
    template: require('../view/about.html'),
    controller : 'AboutCtrl',
    controllerAs : 'about',
    data : {
    	pageTitle : 'About',
    	pageDescription: 'About us'
    }
};