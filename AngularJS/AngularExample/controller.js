var app = angular.module('myApp'); //we are calling the module created in app.js

//best practice to capitalize the first letter of the controller and to spell it out.
//anything with a $$ is internal angular code. we should not touch these.
app.controller('MainController', function ($scope) {
    $scope.users = [];
    $scope.addUser = function() {
        console.log($scope.newUser);
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
    };
    
    $scope.deleteUser = function(index) {
        console.log(index);
        $scope.users.splice(index, 1);
    };
});