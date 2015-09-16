angular
  .module('RisingStarTravel', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/intinerary', {
        templateUrl: 'assets/static/form.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
   .controller("Main", function(Itinerary) {
    this.save = function() {
      var itinerary = new Itinerary({
        name: this.itinerary.name,
        date: this.itinerary.date
        /* ... */
      });
      itinerary.$save();
    };
  });
