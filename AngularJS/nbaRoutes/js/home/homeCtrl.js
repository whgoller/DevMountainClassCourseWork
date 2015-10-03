var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService){
  
  var allData = homeService.getAllTeamsData();
  //console.log(allData);
  
  $scope.jazzData = allData[0];
  $scope.logoPath1 = 'images/jazz-logo.png'
  $scope.jazzHomeTeam = 'Utah Jazz'
  console.log(allData);
  
  $scope.lakersData = allData[1];
  $scope.lakersHomeTeam = 'Los Angeles Lakers';
  $scope.logoPath2 = 'images/lakers-logo.png';
  
  $scope.heatData = allData[2];
  $scope.heatHomeTeam = 'Miami Heat';
  $scope.logoPath3 = 'images/heat-logo.png';
  
  

  
  
  
});