angular.module('ngoCtrl', [])

	.controller('ngo-ctrl', ['$scope', 'ngoService', function ($scope, ngoService) {

		// bring data from ngo api
		ngoService.getData()
			.success(function(res, status, header, config) {
				$scope.ngoData = res;
				console.log(res);
			})
			.error(function() {
				console.log('error occured');
			})
	}])