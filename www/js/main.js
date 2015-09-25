angular
  .module('RisingStarTravel', ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/itinerary/create/:id', {
        templateUrl: '/js/templates/form.html',
        controller: 'ItineraryCtrl',
        controllerAs: 'main'
      })
      .when('/itinerary/create/', {
        templateUrl: '/js/templates/form.html',
        controller: 'ItineraryCtrl',
        controllerAs: 'main'
      })
      .when('/itinerary/:name', {
        templateUrl: '/js/templates/list.html',
        controller: 'ItineraryListCtrl',
        controllerAs: 'main'
      })
      .when('/artists', {
        templateUrl: '/js/templates/table.html',
        controller: 'Table',
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
      },
      update: function (id, obj, cb) {
        $http.put('/api/itinerary/' + id, obj).then(cb);
      },
      getItineraries: function (cb) {
        $http.get('/api/itinerary').then(cb);
      },
      getItinerary: function (id, cb) {
        $http.get('/api/itinerary/' + id).then(cb);
      },
      sendItineraryEmail: function (id, cb) {
        $http.post('/api/itinerary/' + id + '/email').then(cb)
      }
    };
  })

  .controller("ItineraryListCtrl", function($http, Itinerary, $routeParams) {
    var vm = this;

    vm.name = $routeParams.name;

    Itinerary.getItineraries(function(data) {
      vm.itineraries = data.data;
    })

    vm.sendEmail = function () {
      Itinerary.sendItineraryEmail(vm.itineraries[1]._id, function () {
        alert('Sent Email');
      });
    };


  })
  .controller("ItineraryCtrl", function(Itinerary, $location, $routeParams) {
    var vm = this,
        id = $routeParams.id;

    if (id) {
      Itinerary.getItinerary(id, function(data) {
        vm.itinerary = data.data;
      });
    }

    vm.save = function () {
      if (id) {
        return Itinerary.update(id, vm.itinerary, function () {
          $location.path("/itinerary/" + vm.itinerary.artist);
        });
      }

      Itinerary.create(vm.itinerary, function () {
        $location.path("/itinerary/" + vm.itinerary.artist);
      });
    };
  })
  .controller("HomeCtrl", function() {
    this.message = "";
  })
  .controller("Table", function(Itinerary){
       var vm = this;
    Itinerary.getItineraries(function(data) {
      vm.itineraries = data.data;
    })

    });