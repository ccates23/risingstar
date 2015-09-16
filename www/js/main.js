angular
  .module('RisingStarTravel', ["ngRoute"], function ($locationProvider){
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
      });

  })
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
  })

   .controller("Table", function($http, $location){
    var vm = this;
    vm.itinerary = {};
    var body = {}
    body.id = $location.path().slice(17);
    debugger
    $http.post('/api', body).then(function(data){
      console.log(data)
      vm.itinerary = data;
    },function(err){
      console.log(err);
    })
   })
