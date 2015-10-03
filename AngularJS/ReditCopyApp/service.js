var app = angular.module('reddit');

app.service('mainService', function(){
    
    var data = [
        {
            author:"Wendy",
            body:"WOW!",
            comments: [],
            karma: 0,
            timestamp: 142361819256,
            title: "This is a post"
        },
        {
            author:"Tim",
            body:"Mew!",
            comments: [],
            karma: 0,
            timestamp: 15654832256,
            title: "This is a new post"
        }
    ]
    
    this.getData = function(){
        return data;
    }
});