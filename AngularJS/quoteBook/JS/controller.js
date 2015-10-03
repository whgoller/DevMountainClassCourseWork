var app = angular.module('quoteBook');

app.controller("MainController", function($scope, mainService){
    $scope.test = "Hello There!"
    $scope.quotes = mainService.getData();
    $scope.showForm = false;
    
    $scope.addNewQuote = function(){
        if($scope.showForm){
            $scope.showForm = false;
        } else {
            $scope.showForm = true;
        }
        $scope.showDeleteButton = false;
        $scope.filterStuff = false;
    }
    
    $scope.showRemoveButton = function(){
        if($scope.showDeleteButton){
            $scope.showDeleteButton = false;
        } else {
            $scope.showDeleteButton = true;
        }
        $scope.showForm = false;
        $scope.filterStuff = false;
    }
    
    $scope.showFilterForm = function(){
        if($scope.showFilter){
            $scope.showFilter = false;
        } else {
            $scope.showFilter = true;
        }        
        $scope.showDeleteButton = false;
        $scope.showForm = false;
        
    }
    
    
    $scope.addQuote = function(){
        mainService.addData($scope.copy, $scope.authorName);
        $scope.copy = '';
        $scope.authorName = '';
    }
    
    $scope.removeQuote = function(quote){
        mainService.removeData(quote);
    }
    

    
    
});
