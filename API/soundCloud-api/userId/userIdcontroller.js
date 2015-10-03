var app = angular.module('sounder');

app.controller('UserIdController', function($scope, $routeParams, usersService){
  
  $scope.getUserInfo = function(){
    usersService.getUserId(username).then(function(response){
      console.log(response);
      $scope.userInfo = response;
    });
  }
  
});