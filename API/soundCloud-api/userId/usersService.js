var app = angular.module('sounder');

app.service('usersService', function($http){
  
    this.getUserId = function(username){
    return $http({
      method: 'GET',
      url: 'http://api.soundcloud.com/users/' + username + '.json?client_id=bda4ada8694db06efcac9cf97b872b3e'
    });
  }
  
});