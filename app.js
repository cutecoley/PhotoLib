angular.module('photolib', ['photolib.services', 'photolib.pages', 'ngRoute'])
.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'photo.html',
			controller: 'photoController'
		})

})