angular.module('ngoService', [])

	.factory('ngoService', ['$http', function($http) {
		return{
			getData: function() {
				return $http.get('http://api.fundsofhope.org/ngo/');
			}
		}
	}])