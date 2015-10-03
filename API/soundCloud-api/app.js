var app = angular.module('sounder',['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  
  $routeProvider
    .when('/tracks', {
      templateUrl: '/tracks/tracks.html',
      controller: 'TracksController'
      //resolve:{
        
      //}
    })
    .when( '/users/:userId', {
      templateUrl: '/userId/userId.html',
      controller: 'UserIdController'
      //resolve:{
        
      //}
    })
    .otherwise({
    redirectTo: '/'
    });
  
});