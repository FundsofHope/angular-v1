angular.module('homeContentCtrl', [])
	
	.controller('home-content-ctrl', ['$scope', '$mdDialog', '$mdSidenav', function($scope, $mdDialog, $mdSidenav) {
		// HOME CONTROLLER
		$scope.closeLeft = function() {
			$mdSidenav('leftNavBar').close();
		}

	}])