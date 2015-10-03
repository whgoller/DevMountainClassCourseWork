var app = angular.module('githubapi');

//var id = "3257a93c96b37cf80ae9";
//var sec = "45becb1dda65f5af435cb81048b8791bd02440f9";
//var param = "?client_id=" + id + "&client_secret=" + sec;

app.service('githubService', function($http){
  this.getUser = function(username){
    return $http.get('https://api.github.com/users/' + username).
    success(function(data, status){
      console.log(data);
      console.log(status);
      return data = data;
    }).
    error(function(data, status){
      alert('not a valid user name');
    });
  }
  
  
  
  
  
  
});