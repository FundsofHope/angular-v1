angular.module('allDirectives', [])

	.directive('toolBar', function() {
		return {
			restrict: 'E',
			templateUrl: './templates/directive-templates/tool-bar.html'
		};
	})

	.directive('sideNav', function() {
		return {
			restrict: 'E',
			templateUrl: './templates/directive-templates/side-nav.html'
		};
	})