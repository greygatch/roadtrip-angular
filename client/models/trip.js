'use strict';

angular.module('roadtrip')
.factory('Trip', function($http, nodeUrl){

  function Trip(obj){
    this._id = obj._id
    this.name = obj.name;
    this.departure = obj.departure;
  }

  Trip.show = function(tripId){
    return $http.get(nodeUrl + '/trips/' + tripId);
  };

  Trip.find = function(){
    return $http.get(nodeUrl + '/trips');
  };

  Trip.prototype.save = function(){
    return $http.post(nodeUrl + '/trips', this);
  };

  Trip.prototype.addStop = function(stop){
    return $http.post(nodeUrl + '/trips/' + this._id + '/stops', stop);
  }

  Trip.destroyStop = function(tripId, stop){
    return $http.delete(nodeUrl + '/trips/' + tripId + '/stops/' + stop._id)
  }

  Trip.prototype.destroy = function(){
    console.log(this);
    return $http.delete(nodeUrl + '/trips/' + this._id);
  }

  return Trip;
});
