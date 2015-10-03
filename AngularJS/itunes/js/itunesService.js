var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also note that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.
  
  //var deferred = $q.defer();
  this.findArtistSongs = function(artist){
    var deferred = $q.defer();
    $http({
      method: 'JSONP',
      url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
    }).then(function(response){
      deferred.resolve(response.data.results);
      //console.log(response);
    });
    return deferred.promise;
  };
});






////this is functionally the same thing as before....
//this.getSongs = function(artist){
//  var httpPromise = $http.jsonp('https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK');
//  var ourPromise = httpPromise.then(function(response1){
//    $http.jsonp('apple.com/people_that_like/' + artist).then(function(response2){
//      return{
//        originalRequestData: response1.data.results,
//        secondRequestData: response2.data.results
//      };
//    }); //could also return a new promise.
//  });
//  return ourPromise;
//};
//
//
////then in the controller
//itunesService.getSongs("bob marley").then(function(res){
//  songs = res.originalRequestData;
//  peopleThatLikeIt = res.secondRequestData;
//});