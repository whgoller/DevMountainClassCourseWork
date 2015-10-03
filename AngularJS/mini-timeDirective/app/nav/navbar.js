//this is our directive.

var app = angular.module('leApp');

app.directive('navbar', function(){
  return {
    restrict: 'E',
    templateUrl: './app/nav/navbar.html',
    
  }
});