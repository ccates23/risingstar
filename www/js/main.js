angular
  .module('RisingStarTravel', ["ngRoute"])
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
  .factory("Itinerary", function($http) {
    return {
      create: function (obj, cb) {
        $http.post('/api/itinerary', obj).then(cb);
      }
    };
  })
  .controller("ItineraryListCtrl", function(Itinerary) {
    // this.itineraries = Itinerary.query();
  })
  .controller("ItineraryCtrl", function(Itinerary, $location) {
    var vm = this;

    vm.save = function() {
      Itinerary.create(vm.itinerary, function () {
        $location.path("/itinerary");
      });
    };
  })
  .controller("HomeCtrl", function() {
    this.message = "Welcome to Rising Star Travel!";
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