var app = angular.module('userProfiles');

app.service('mainService', function($http) {
    this.getUsers = function(page){
        return $http({
            method: 'GET',
            //url: 'http://reqr.es/api/users?page=' + i
            url: 'http://reqr.es/api/users?page=' + page,
        }).then(function(response){
            return response.data.data;
        });
    }    
    
});







//app.service('mainService', function() {
//
//  var userData = [{
//        "id": 1,
//        "first_name": "george",
//        "last_name": "bluth",
//        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
//    },
//    {
//        "id": 2,
//        "first_name": "lucille",
//        "last_name": "bluth",
//        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
//    },
//    {
//        "id": 3,
//        "first_name": "oscar",
//        "last_name": "bluth",
//        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
//    }
//  ];
//    
//    this.getUsers = function(){
//        return userData;
//    }
//    
//    
//});