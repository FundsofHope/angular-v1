angular.module('route', [])
	
	.config([
		'$locationProvider', '$routeProvider', function($locationProvider, $routeProvider){
			$locationProvider.html5Mode(false);
			$routeProvider.when('/home', {
				templateUrl: 'templates/home.html',
				controller: 'home-content-ctrl'
			}).when('/projects', {
				templateUrl: 'templates/project.html',
				controller: 'project-ctrl'
			}).when('/ngos', {
				templateUrl: 'templates/ngo.html',
				controller: 'ngo-ctrl'
			}).when('/trending', {
				templateUrl: 'templates/trending.html',
				controller: 'trendingCtrl'
			}).when('/custom', {
				templateUrl: 'templates/custom.html',
				controller: 'customCtrl'
			}).otherwise({
				redirectTo: '/home'
			});
		}
	]);