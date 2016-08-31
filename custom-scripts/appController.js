angular.module('app')
	
	.controller('abc', ['$scope', function($scope){

	}])

	.controller('homeloginCtrl', ['$scope', '$http',
		function ($scope, $http){
				var descriptions;
				$http.get('http://api.fundsofhope.org/projects/all').success(function(data){
				$scope.descriptions = data;
				console.log(descriptions);
			})
		}]);
