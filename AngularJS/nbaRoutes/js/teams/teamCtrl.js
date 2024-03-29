var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamService, teamData){
  
 
  $scope.teamData = teamData;
  
  $scope.newGame = {};
  $scope.showNewGameForm = false;
  $scope.toggleNewGameForm = function(){
    $scope.showNewGameForm = true;
  };
  
  if($routeParams.team === 'utahjazz'){
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
  } else if ($routeParams.team === 'losangeleslakers'){
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = 'images/lakers-logo.png';
  } else if ($routeParams.team === 'miamiheat'){
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
  }
  
  
  $scope.submitGame = function(){
    //debugger;
    $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase();
    $scope.newGame.opponent = $scope.team;
    teamService.addNewGame($scope.newGame).then(function(){
      teamService.getTeamData($scope.newGame.homeTeam).then(function(data){
        $scope.teamData = data;
       // console.log($scope.teamData)
        $scope.newGame = {};
        $scope.showNewGameForm = false;
      })
    });
    
  }
});