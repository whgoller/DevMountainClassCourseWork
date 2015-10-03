var app = angular.module('githubapi');

app.controller('GitHubController', function($scope, githubService){
  $scope.getUserData = function(){
    return githubService.getUser($scope.searchText).then(function(response){
      $scope.user = response.data;
      $scope.name = response.data.name;
      $scope.avatar = response.data.avatar_url;
      $scope.company = response.data.company;
      $scope.email = response.data.email;
      $scope.repos = response.data.public_repos;
      $scope.followers = response.data.followers;
      $scope.following = response.data.following;
    });
  };
  
});