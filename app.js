// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'home.php',
		controller: 'homeController'
	})

	.when('/forecast', {
		templateUrl: 'forecast.php',
		controller: 'forecastController'
	})

});

// SERVICES
weatherApp.service('cityService', function(){
	this.city = "New York";
});


// DIRECTIVES
weatherApp.directive('searchResult', function(){
	return{
		restrict: 'EA',
		templateUrl: 'searchResult.php',
		replace: true
	}
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$resource', '$http', 'cityService', function($scope, $resource, $http, cityService) {
	$scope.city = cityService.city;

	$scope.$watch('city', function(){
		cityService.city = $scope.city;

		console.log(cityService.city);

		$http.post('city.php', {"city": $scope.city})
		.success(function(response) {
			console.log(response);
			$scope.searchResult = response;
		})
		.error(function(data, status){
			console.log("error");
		});
	});
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
	$scope.city = cityService.city;

	
}]);




