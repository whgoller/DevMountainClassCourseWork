.module('name',['ui.router', 'ui.bootstrap']);

.config(['$stateProvider', '$urlRouterProvider', '$locatioProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
  $httpProvider.defaults.headers.common = {
    'Content-Type' : 'application/json', 
    'X-Parse-Application-Id': 'pEXzExsQpPQ4zMDDRI7htT32lYFnzQPJbrj4L0En', 
    'X-Parse-REST-API-Key': 'r9P8CsIPXFuwZMuqaNmQmlvBw4A58I1kEDTyIhkj'
  };
  
}]);