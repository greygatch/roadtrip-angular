'use strict';

angular.module('roadtrip')
.controller('TripsListCtrl', function($scope, Trip, $window){
  Trip.find()
  .then(function(response){
    $scope.trips = response.data.trips;
  });

  $scope.deleteTrip = function(o){
    var trip = new Trip(o);
    trip.destroy(trip)
    .then(function(response){
      $scope.trips = response.data.trips;
    })
  }
});
