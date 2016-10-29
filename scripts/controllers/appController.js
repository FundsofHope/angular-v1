angular.module('app')
		
	//SERVICES
	.factory('projectsDataFactory', ['$http', 
		function($http) {
			return {
				projectsData: function(){
					var config = {
					headers : {
						'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'        	
                	}
				}
				return $http.get('http://api.fundsofhope.org/projects/all');
				}
			}
		}]) 


	.controller('home-content-ctrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
		// HOME CONTROLLER
	}])	


	.controller('index-ctrl', ['$scope', '$http', '$mdSidenav', function($scope, $http, $mdSidenav){
		$scope.FbLogin = function(){
			FB.login(function(response) {
			    if (response.authResponse) {
			    	FB.api('/me?fields=first_name,picture,last_name,email', function(response) {    		       
				    	console.log('Good to see you, ' + response.first_name + '.');
				    	console.log(response.picture.data.url);
					    console.log(response.picture);
					    console.log(response.id);
					    console.log(response.email);
					    var data = $.param({
			                id: response.id,
			                firstname: response.first_name,
			                lastname: response.last_name,
			                email: ""
			            	});
				        var config = {
		                	headers : {
		                    	'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		                	}
		            	}
		            	$http.post('api.fundsofhope.org/signup/', data, config)
		            		.success(function (data, status, headers, config) {
		            			console.log(data);
		                		$scope.PostDataResponse = data;
		            		})
		            		.error(function (data, status, header, config) {
		                		$scope.ResponseDetails = "Data: " + data +
			                    "<hr />status: " + status +
			                    "<hr />headers: " + header +
			                    "<hr />config: " + config;
		            		});
				    		//window.location.href = "../htmlDocs/testHome.html"
					});
				}
			});
		}

		// GOOGLE LOGIN function
		function onSignIn(googleUser) {
			// console.log(googleUser);
	  		var profile = googleUser.getBasicProfile();
	  		console.log("enter");
	  		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	  		console.log('Name: ' + profile.getName());
	  		console.log('Image URL: ' + profile.getImageUrl());
	  		console.log('Email: ' + profile.getEmail());
		}

        //TOOGLING SIDE NAVBAR
		$scope.toogleleft = function(){
			$mdSidenav('leftNavBar').toggle();
		}
	}])
	
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
			$scope.showModel = function() {
				$mdDialog.show({
					controller: 'project-ctrl',
					templateUrl: 'templates/projectDialog.html',
					parent: angular.element(document.body),
					clickOutsideToClose:true,
        			fullscreen: $scope.customFullscreen
				});
			}

		}])

	.controller('ngo-ctrl', ['$scope', '$http',
			// NGO CARDs IMPLEMENTATION
		])

	.controller('wishlist', ['$scope', '$http', 
		function() {
			
		}])
