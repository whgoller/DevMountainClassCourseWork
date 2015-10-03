var app  = angular.module('parseQ');

app.controller('MainController', function($scope, parseService){
  
  $scope.test = 'Hi';
  $scope.postQuestion = function(){
    parseService.postData($scope.newQuestion).then(function(response){
      $scope.getParseData();
      $scope.newQuestion = '';
      console.log(response);
    });
  }
  
  $scope.getParseData = function(){
    parseService.getData().then(function(response){
      console.log(response);
      $scope.previousQuestions = response;
    });
  }
  
  $scope.updateQuestion = function(id){
    parseService.updateData(id).then(function(response){
      console.log(response);
      $scope.getParseData();
    });
  }
  
  $scope.deleteQuestion = function(id){
    parseService.deleteData(id).then(function(response){
      console.log(response);
      $scope.getParseData();      
    });
  }
  
  
  
  
  
  
  
  
  $scope.getParseData();
  
});