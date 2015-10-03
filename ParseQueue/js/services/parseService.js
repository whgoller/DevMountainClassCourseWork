var app  = angular.module('parseQ');

app.service('parseService', function($http, $q){
  
  var URL = 'https://api.parse.com/1/classes/Questions';
  
  this.postData = function(question){
    return $http({
      method: 'POST',
      url: URL,
      data:  {
              Question: question,
              Status: 'red'
             }
    });
  }
  
  this.getData = function(){
    var deffered = $q.defer();
    $http({
      method: 'GET',
      url: URL      
    }).then(function(data){
      console.log('get',data);
      deffered.resolve(data.data.results);
    });
    return deffered.promise;
  }
  
  
  this.updateData = function(id){   
    return $http({
      method: 'PUT',
      url: URL +'/'+ id,
      data:  {
              Status: 'yellow'
             }
    })
  }
  
  this.deleteData = function(id){ 
    return $http({
      method: 'DELETE',
      url: URL +'/'+ id
    })
  }
  
});