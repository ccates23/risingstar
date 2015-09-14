angular
  .module('RisingStarTravel')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/submit', {
        templateUrl: 'assets/static/form.html',
        controller: 'ButtonController',
        controllerAs: 'button'
      })
