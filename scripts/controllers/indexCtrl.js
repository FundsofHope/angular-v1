angular.module('indexCtrl', []) 	


	.controller('index-ctrl', ['$scope', '$http', '$mdSidenav', '$cookieStore', function($scope, $http, $mdSidenav, $cookieStore){


	// INITIATING FB FUNTION ASYNHRONOUSLY
	window.fbAsyncInit = function() {
	    FB.init({ 
	      appId: '1780049375589719',
	      status: true, 
	      cookie: true, 
	      xfbml: true,
	      version: 'v2.4'
	    });
	};

	(function(d, s, id){
	    var js, fjs = d.getElementsByTagName(s)[0];
	    if (d.getElementById(id)) {return;}
	    js = d.createElement(s); js.id = id;
	    js.src = "//connect.facebook.net/en_US/sdk.js";
	    fjs.parentNode.insertBefore(js, fjs); 
		}(document, 'script', 'facebook-jssdk'));




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
		                		console.log(data.user_id);
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
		$scope.toogleLeft = function() {
			$mdSidenav('leftNavBar').toggle();
		}

		

		// GET COOKIE NAMED USER_ID
		$scope.getUser = function() {
			if($cookieStore.get('user_id') == 2){
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
	
	

	

	
