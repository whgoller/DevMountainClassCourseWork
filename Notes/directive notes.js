//this would be in the index.html file
<div ng-controller="controllername">
  <div speak action="sayHi()"></div>
  
</div>










//this is the timeDirective.js file

var  app = angular.module('miniDirective');





app.controller('mainCtrl', function($scope){
  $scope.sayHi = function(){
    alert('Hello World!');
  };
});





//example 1
app.directive('speak', function(){
  return{
    restrict: 'A',
    scope: {
      action: '&' //this is calling a method. 
    },
    template: '<div> <button ng-click="action()">Click Me</button></div>'
  }
});








//example2
//this would be in the index.html file
<div ng-controller="controllername">
  <div speak item="helloWorld"></div>
  
</div>


//this is the timeDirective.js file

var  app = angular.module('miniDirective');





app.controller('mainCtrl', function($scope){
  $scope.sayHi = function(){
    alert('Hello World!');
  };
  
  $scope.helloWorld = 'Hello World!'
});



app.directive('speak', function(){
  return{
    restrict: 'A',
    scope: {
      item: '=' //this is calling a method. 
    },
    template: '<div>{{item}}</div>'
  }
});