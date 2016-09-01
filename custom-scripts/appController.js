angular.module('app')
	
	.controller('home-content-ctrl', ['$scope', '$http',
			// LOGIN SYSTEM IMPLEMENTATION
		])

	.controller('project-ctrl', ['$scope', '$http',
		function ($scope, $http){
				var descriptions;
				$http.get('http://api.fundsofhope.org/projects/all').success(function(data){
				$scope.descriptions = data;
				console.log(descriptions);
			})
		}])

	.controller('ngo-ctrl', ['$scope', '$http',
			// NGO CARDs IMPLEMENTATION
		])
