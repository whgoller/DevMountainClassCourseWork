var app = angular.module('sounder');

app.controller('MainController', function($scope, $sce, soundService){
  
  $scope.getUser = function(){
    soundService.getUser($scope.searchText).then(function(response){
      console.log(response);
      $scope.userData = response.data;
      $scope.UserName = response.data[0].user.username;
    });
  };
  
  $scope.play = function(track_url){
    SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
    });
  }
  
  
  
});