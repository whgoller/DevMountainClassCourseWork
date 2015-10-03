var app = angular.module('reddit');

app.service('FirebaseService',function($http, $q){
  
  this.getPosts = function(){
    var deffered = $q.defer();
    $http.get('https://devmtn.firebaseio.com/posts.json').then(function(response){
      deffered.resolve(response.data);
    });
    return deffered.promise;
  };
  
  
  this.addPost = function(myPostObj){
   // var deffered = $q.defer();
    myPostObj.timestamp = Date.now();
    myPostObj.comments = [];
    myPostObj.karma = 0;
    myPostObj.id = guid();
    
//    $http.put('https://devmtn.firebaseio.com/posts/' + myPostObj.id + '.json', myPostObj).then(function(response){
//        deffered.resolve();
//    });
//    
//    return deffered.promise;
      
    return $http.put('https://devmtn.firebaseio.com/posts/' + myPostObj.id + '.json', myPostObj);
      
  };
  
  
  var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
  
  
  this.vote = function(postId, direction, karma){
      if(direction === 'up'){
          karma++;
      } else if (direction === 'down'){
          karma--;
      } else {
          conslole.log('The karmas broke');
      }
      
      return $http({
         method: 'PATCH',
         url: 'https://devmtn.firebaseio.com/posts/' + postId + '.json',
         data: {karma: karma}
      });
  }
  
  this.addComment = function(postId, commentObj){
      return $http({
         method: 'POST',
         url: 'https://devmtn.firebaseio.com/posts/' + postId + '/comments.json',
         data: {comments: commentObj}
      });
  }
  
  
});
        
