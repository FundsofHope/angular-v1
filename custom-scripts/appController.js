angular.module('app')

	.controller('home-content-ctrl', ['$scope', '$mdDialog', function($scope, $mdDialog){
		console.log("enter");
        $scope.popDialog = function(event) {
           $mdDialog.show({
              clickOutsideToClose: true,
              scope: $scope,        
              preserveScope: true,           
              template: '<md-dialog aria-label="List dialog">' +
                         '  <md-dialog-content>'+
                         '    <md-list>'+
                         '      <md-list-item ng-repeat="item in items">'+
                         '       <p>* <b>{{item}}</b></p>' +
                         '      '+
                         '    </md-list-item></md-list>'+
                         '  </md-dialog-content>' +
                         '  <md-dialog-actions>' +
                         '    <md-button ng-click="closeDialog()" class="md-primary">' +
                         '      Close' +
                         '    </md-button>' +
                         '  </md-dialog-actions>' +
                      '</md-dialog>',
              controller: function DialogController($scope, $mdDialog) {
                 $scope.closeDialog = function() {
                    $mdDialog.hide();
                 }
              }
           });
        };
	}])	


	.controller('login-ctrl', ['$scope', '$http', function($scope, $http){
		$scope.FbLogin = function(){
			FB.login(function(response) {
			    if (response.authResponse) {
			    	FB.api('/me?fields=first_name,picture,last_name', function(response) {    		       
				    	console.log('Good to see you, ' + response.first_name + '.');
				    	console.log(response.picture.data.url);
					    console.log(response.picture);
					    console.log(response.id);
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
		            	$http.post('', data, config)
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


	}])
	


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
