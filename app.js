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

	.when( '/forecast/:id', {
		templateUrl: 'forecast.php',
		controller: 'forecastController'
	})

});

// SERVICES
weatherApp.service('cityService', function(){
	this.city = "";
});


// DIRECTIVES
weatherApp.directive('search', function(){
	return{
		restrict: 'EA',
		templateUrl: 'searchResult.php',
		replace: true, 
	}
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$resource', '$http', '$log', '$filter', 'cityService', function($scope, $resource, $http, $log, $filter, cityService) {
	$scope.city = cityService.city;

		// Watch for content in input
		$scope.$watch('city', function(){
			cityService.city = $scope.city;

			// If input is not empty, query database for possible matched cities
			if(cityService.city != "" && cityService.city != null){
				$http.post('city.php', {"city": $scope.city})
				.success(function(response) {
					$scope.searches = response;
				})
				.error(function(data, status){
					$log.info(status);
					$log.log(data);
					$log.error("Error: could not complete db request");
				});
			}
		});
	
	
}]);



weatherApp.controller('forecastController', ['$scope', '$resource', '$location', 'cityService', function($scope, $resource, $location, cityService){
	$scope.city = cityService.city;

	$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

		$scope.weatherResult = $scope.weatherAPI.get({id: $location.hash(), appid: 'd59578edc6395145e5a089c521629d80'});

		console.log($scope.weatherResult);

	// Conver to F
	$scope.convertToFahrenheit = function(k) {
		return Math.round((1.8 * (k - 273)) + 32);
	}

	// Convert Date
	$scope.convertToDate = function(dt) {
		return new Date(dt * 1000);
	}

	// Weather Icon
	$scope.getIcon = function(icon) {
		return "http://openweathermap.org/img/w/" + icon + ".png";
	}
	
}]);




