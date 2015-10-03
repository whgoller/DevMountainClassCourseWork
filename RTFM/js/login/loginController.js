var app = angular.module('rtfmApp');

app.controller('loginController', function($scope, EnvironmentService, $location, $timeout){
  $scope.env = EnvironmentService.getEnv;
  
  $scope.logMeIn = function(username){
    alert(username);
    EnvironmentService.saveUsername(username);
    $location.path('/threads');
  }


});