var app = angular.module('rtfmApp');

app.controller('singleThreadController', function($scope, thread, comments){
  $scope.thread = thread;
  $scope.comments = comments;
  
  $scope.createComment = function(username, text){
    $scope.comments.$add({
      username: username,
      text: text
    });
  }
});