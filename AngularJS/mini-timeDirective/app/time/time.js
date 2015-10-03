var app = angular.module('leApp');

app.directive('theTime', function(){ // theTime is changed to the-time in the html 
  return{
    restrict: 'E',
    template: 'The current time is: {{time | date: "MM/dd/yyyy \'at\' h:mma"}}',
    link: function(scope, element, attrs){ //the scope variable can have $scope or scope without the dollar sign because the parameters position
      scope.time = Date.now();
    }
  }
});



//app.directive('theTime', function(){ // theTime is changed to the-time in the html 
//  return{
//    restrict: 'E',
//    template: 'The current time is: {{time | date: "MM/dd/yyyy \'at\' h:mma"}}',
//    link: function(scope){ 
//      scope.time = Date.now();
//    }
//  }
//});



//app.directive('theTime', function(){ // theTime is changed to the-time in the html 
//  return{
//    restrict: 'E',
//    template: 'The current time is: {{time}}',
//    link: function(scope, element, attrs){ 
//      var currentTime = new Date();
//      scope.time = currentTime.toString();
//    }
//  }
//});

//the following would turn this into an isolated directive
var app = angular.module('leApp');

app.directive('theTime', function(){ // theTime is changed to the-time in the html 
  return{
    restrict: 'E',
    template: 'The current time is: {{time | date: "MM/dd/yyyy \'at\' h:mma"}}',
    controller: 
    scope: {
      externalMethod
    },
    
    link: function(scope, element, attrs){ //the scope variable can have $scope or scope without the dollar sign because the parameters position
      scope.time = Date.now();
    }
  }
});