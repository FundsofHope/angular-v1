angular.module('app', ['ngRoute', 'ngMaterial'])
	
	// IMPLEMENTING ROUTING
	.config([
		'$routeProvider', function($routeProvider){
			$routeProvider.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'home-content-ctrl'
			}).when('/projects', {
				templateUrl: 'templates/project.html',
				controller: 'project-ctrl'
			}).when('/ngos', {
				templateUrl: 'templates/ngo.html',
				controller: 'ngo-ctrl'
			}).otherwise({
				redirectTo: '/home'
			});
		}
	]);