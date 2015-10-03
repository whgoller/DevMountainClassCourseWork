var app = angular.module('nbaRoutes');

app.service('homeService', function($http, $q, teamService){
  
  this.getAllTeamsData = function(){
    var deffered = $q.defer();
    var jazz = teamService.getTeamData('utahjazz');
    var lakers = teamService.getTeamData('losangeleslakers');
    var heat = teamService.getTeamData('miamiheat');
    
    var teamArray = [jazz, lakers, heat];
    deffered.resolve(teamArray);
    return deffered.promise;
  };
  
});