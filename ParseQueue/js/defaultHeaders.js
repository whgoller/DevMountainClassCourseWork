var app  = angular.module('parseQ');

app.factory('httpRequestInterceptor', function(){
  return {
    request: function (config){
      config.headers = {
        'X-Parse-Application-Id': 'pEXzExsQpPQ4zMDDRI7htT32lYFnzQPJbrj4L0En', 
        'X-Parse-REST-API-Key': 'r9P8CsIPXFuwZMuqaNmQmlvBw4A58I1kEDTyIhkj'
      };
      return config;
    }
  };
  
});

