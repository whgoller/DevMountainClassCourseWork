var app = angular.module('rtfmApp');

app.service('EnvironmentService', function ($window, $http) {
    return {
      getEnv: function () {
        return $window.env;
      },
      
      saveUsername: function(username){
        $window.localStorage.setItem('username', username);
      },
      
      getUsername: function(){
        return $window.localStorage.getItem('username');
      }
    }
    
//    this.saveUsername = function(username){
//      $window.localStorage.setItem('username', username);
//    }
//    
//    this.getUsername = function(){
//      return $window.localStorage.getItem('username');
//    }

  });