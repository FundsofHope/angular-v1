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
				return $http.get('http://api.fundsofhope.org/project');
				}
			}
		}]) 


	.controller('home-content-ctrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
		// HOME CONTROLLER
	}])	


	.controller('index-ctrl', ['$scope', '$http', '$mdSidenav', '$cookieStore', function($scope, $http, $mdSidenav, $cookieStore){
		$scope.FbLogin = function(){
			FB.login(function(response) {
			    if (response.authResponse) {
			    	FB.api('/me?fields=first_name,picture,last_name,friends,likes', function(response) {  
			    		$scope.userInfo = response;
			    		console.log($scope.userInfo.first_name);  		       
				    	console.log('Good to see you, ' + response.first_name + '.');
				    	// console.log(response.picture.data.url);
					    // console.log(response.picture);
					    // console.log(response.id);
					    // console.log(response.friends);
					    // console.log(response.likes);
					    var data = {
			                "phoneNo": "8447858705",
			                "name": response.first_name,
			                "googleCred": response.id,
			                "email": "nikhil.sangwan95@gmail.com"
			            	};
				        var config = {
		                	headers : {
		                    	'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
		                	}
		            	}
		            	$http.post('http://api.fundsofhope.org/user/signup/', data, config)
		            		.success(function (data, status, headers, config) {
		                		$scope.PostDataResponse = data;
		                		$cookieStore.put('user_id', data.user_id);
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
		$scope.toogleleft = function() {
			$mdSidenav('leftNavBar').toggle();
		}

		// GET COOKIE NAMED USER_ID
		$scope.getUser = function() {
			if($cookieStore.get('user_id') == 6){
				return true;
			}else {
				return false;
			}
		}

		// LOGOUT
		$scope.logout = function() {
			$cookieStore.remove('user_id');
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

	.controller('ngo-ctrl', ['$scope', '$http',
			// NGO CARDs IMPLEMENTATION
		])

	.controller('wishlist', ['$scope', '$http', 
		function() {
			
		}])
