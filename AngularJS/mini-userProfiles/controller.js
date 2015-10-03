var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService){
    
    var getUsers = function(){
        $scope.page = 2;
        
        mainService.getUsers($scope.page).then(function(data){
            $scope.users = data;
            console.log($scope.users);
        });
    };
    
    getUsers();
    
}); 