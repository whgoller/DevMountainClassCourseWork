angular.module('chatroom').service('parseService', function($http){

    this.postData = function(message){
        return $http.post('https://api.parse.com/1/classes/chat', {text: message});
    };


    this.getData = function(){
        return $http.get('https://api.parse.com/1/classes/chat?order=-createdAt');
    };

});