var app = angular.module('reddit');

app.controller('PostsController',function($scope, FirebaseService){
  
  $scope.getPosts = function(){
      FirebaseService.getPosts().then(function(data){
        $scope.posts = data;
      });
  };
  
  $scope.getPosts();
    
    
  $scope.addPost = function(){
    FirebaseService.addPost($scope.newPost).then($scope.getPosts);
  };

  $scope.submitComment = function(id, comment){
      var commentObj = {};
      commentObj.text = comment;
      commentObj.timeStamp = Date.now();
      FirebaseService.addComment(id, commentObj).then($scope.getPosts);
      
  };
    
  $scope.vote = function(id, direction){
      FirebaseService.vote(id, direction, $scope.posts[id].karma).then($scope.getPosts);
      
  };
  
    
    
    
});


