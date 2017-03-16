angular.module('projectCtrl', [])

	.controller('project-ctrl', ['$scope', '$http', '$mdDialog', 'projectsDataFactory',
		function ($scope, $http, $mdDialog, projectsDataFactory) {

			// BRING DATA FROM API AND PUT IN CARDS
			projectsDataFactory.projectsData()
				.success(function(resp, status, headers, scope) {
					$scope.descriptions = resp;
				})
				.error(function() {
					console.log("error occured");
				});

			// SHOW DIALOG MODEL
			$scope.showModel = function(items) {
				// $scope.projectData = items;
				$mdDialog.show({
					locals: {datatopass: items},
					controller: dialogController,
					templateUrl: 'templates/projectDialog.html',
					parent: angular.element(document.body),
					clickOutsideToClose:true,
        			fullscreen: $scope.customFullscreen
				});
				function dialogController ($scope, datatopass) { 
				    $scope.projectData = datatopass;  
					// console.log($scope.projectData);
				}
			}

			// CLOSE MODEL
			$scope.cancel =function() {
				$mdDialog.cancel();
			}

		}])