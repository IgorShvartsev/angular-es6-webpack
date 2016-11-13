export class AboutCtrl {
	constructor($location) {
		"ngInject";
		this.$location = $location;
		this.header = {
			title : "We don't regret of the past, we see the future",
			list : ['Divak technologies']
		};
	}
};