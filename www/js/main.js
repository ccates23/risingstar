angular
  .module('RisingStarTravel', ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/intinerary', {
        templateUrl: 'assets/static/form.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
      })

   .controller("Main", function() {
    this.save = function() {
      var itinerary = new Itinerary({
        date: this.itinerary.date,
        artist: this.itinerary.artist,
        travelers: this.itinerary.travelers,
        vendor: this.itinerary.vendor,
        address: this.itinerary.address,
        phone: this.itinerary.phone,
        checkin: this.itinerary.checkin,
        checkout: this.itinerary.checkout,
        confirmation: this.itinerary.confirmation,
        distance: this.itinerary.distance,
        cost: this.itinerary.cost,
        ccauth: this.itinerary.ccauth,
        notes: this.itinerary.notes
      });
      itinerary.$save();
    };
  });
