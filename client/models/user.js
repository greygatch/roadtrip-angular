'use strict';

angular.module('roadtrip')
.factory('User', function($rootScope, $http, nodeUrl){

  // constructor with 
  function User(obj){
    this.email = obj.email;
    this.avatar = obj.avatar;
  }

  User.prototype.save = function(){
    return $http.put(nodeUrl + '/users', this);
  };

  User.oauth = function(provider){
     return $rootScope.afAuth.$authWithOAuthPopup(provider);
   };

  User.show = function(){
    return $http.get(nodeUrl + '/users');
  };



  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  return User;
});
