var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngMdIcons'])

	// INITIATING FB FUNTION ASYNHRONOUSLY
	window.fbAsyncInit = function() {
	    FB.init({ 
	      appId: '1525793961071513',
	      status: true, 
	      cookie: true, 
	      xfbml: true,
	      version: 'v2.4'
	    });
	};

	(function(d, s, id){
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) {return;}
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs); 
		}(document, 'script', 'facebook-jssdk'));
	
	// IMPLEMENTING ROUTING
	app.config([
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
			}).when('/wishlist', {
				templateUrl: 'templates/wishlist.html',
				controller: 'wishlist-ctrl'
			}).otherwise({
				redirectTo: '/home'
			});
		}
	]);