var app = angular.module('rtfmApp');

app.controller('threadsController', function($scope, threads){
  $scope.threads = threads;
  
  $scope.createThread = function(username, threadTitle){
    $scope.threads.$add({
      username:username,
      title: threadTitle
    });
  }
  
});