
app = angular.module('app', [
	'angular-meteor',
	'angular-meteor.auth',
	'ngSanitize',
	'angularMoment',
	'ngAnimate',
	'ui.router',
	'ngCookies'
]);



angular.element(document).ready(function($rootScope) {
      angular.bootstrap(document, ['app']);
});


