var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
    var promise = mainService.getUsers();
      
  	promise.then(function(users){
      $scope.users = users;
    });
      
    promise.then(function(users){
        $scope.users = users;
    });
  }

  $scope.getUsers();

});