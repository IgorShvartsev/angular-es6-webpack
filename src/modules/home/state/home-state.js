export const homeState = {
    url: '/',
    name : 'home',
    template: require('../view/home.html'),
    controller: 'HomeCtrl',
    controllerAs: 'home',
    data : {
    	pageTitle : 'Home',
    	pageDescription: 'Home description'
    }
};