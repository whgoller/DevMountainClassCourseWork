
//this is the app.js file.
var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  $routeProvider
    .when('/', { //the url is this way then display this html with this angular control
      templateURL:'js/home/homeTmpl.html',
      controller: 'homeCtrl'
    }); 
    .when('/teams/:team', { //the :team is a variable for the specifiec team names... the $routeParams parameter can be used in the controller to access the ":teams"
            
      templateURL:'js/teams/teamTmpl.html',
      controller: 'teamCtrl',
      resolve: {  //the resolve property has an object that can have many functions but the functions must return a promise
          teamData: function($route, teamService){
              return teamService.getTeamData($route.current.params.team);
          }
      }
    });
    .otherwise({
      redirectTo: '/'
    });

});


in the html the ng-view is where the other html will be injected.

//note http requests should always be handled in the service
//$scope should only be used in the controller.
