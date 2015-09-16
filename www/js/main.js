angular
  .module('RisingStarTravel', ["ngRoute", "ngResource"], function ($locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/itinerary/create', {
        templateUrl: '/js/templates/form.html',
        controller: 'ItineraryCtrl',
        controllerAs: 'main'
      })
      .when('/itinerary', {
        templateUrl: '/js/templates/list.html',
        controller: 'ItineraryListCtrl',
        controllerAs: 'main'
      })
      .when('/', {
        templateUrl: '/js/templates/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: "/"
      });
    })
  .factory("Itinerary", function($resource) {
    return $resource('/api/itinerary/:id', null, {
      "update": { method:'PUT' }
    });
  })
  .controller("ItineraryListCtrl", function(Itinerary) {
    this.itineraries = Itinerary.query();
  })
  .controller("ItineraryCtrl", function(Itinerary, $location) {
    this.itinerary = {};

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

      $location.path("/itinerary");
    };
  })
  .controller("HomeCtrl", function() {
    this.message = "Welcome to Rising Star!";
  })
  .controller("Table", function($http, $location){
    var vm = this;

    vm.itinerary = {};

    var body = {}
    body.id = $location.path().slice(17);

    $http.post('/api', body).then(function(data){
      console.log(data);
      vm.itinerary = data;
    }, function(err){
      console.log(err);
    });
  });
