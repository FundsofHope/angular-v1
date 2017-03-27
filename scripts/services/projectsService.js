angular.module('projectsService', [])

	.factory('projectsDataFactory', ['$http', 
		function($http) {
			return {
				projectsData: function(){
					var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'        	
                	}
				}
				return $http.get('http://api.fundsofhope.org/project/');
				}
			}
		}])