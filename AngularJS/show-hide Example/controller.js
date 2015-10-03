var app = angular.module('show-hide');

app.controller("MainController", function($scope){
    //$scope.showForm = true;
    
    $scope.toggle = function(){
        if($scope.showForm){
            $scope.showForm = false;
        } else {
            $scope.showForm = true;
        }
    }
});