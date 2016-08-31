angular.module('app', ['ngRoute', 'ngMaterial'])
	
	// IMPLEMENTING ROUTING
	.config([
		'$routeProvider', function($routeProvider){
			// console.log("yoman")
			$routeProvider.when('/home', {
				// template: '<h1>king</h1>',
				templateUrl: 'templates/home.html',
				// template: '<h1>king</h1>',
				controller: 'homeloginCtrl'
			}).otherwise({
				redirectTo: '/home'
			});
			// console.log("yesman");
		}
	]);