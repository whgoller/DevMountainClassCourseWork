var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
  
  $routeProvider
    .when('/login', {
      templateUrl: 'js/login/login.html',
      controller: 'loginController'
    })
    .when('/threads', {
      templateUrl: 'js/threads/threads.html',
      controller: 'threadsController',
      resolve: {
        threads: function (ThreadService) {
          return ThreadService.getThreads();
        }
      }
    })
    .when('/thread/:threadId', {
      templateUrl: 'js/thread/thread.html',
      controller: 'singleThreadController',
      resolve: {
        thread: function (ThreadService, $route) {
          return ThreadService.getThread($route.current.params.threadId);
        },
        comments: function(ThreadService, $route){
          return ThreadService.getComments($route.current.params.threadId);
        }
      }      
    })
    .otherwise({
      redirectTo: '/login'
    });
  
});


app.run(function($rootScope, $location, EnvironmentService){
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if(EnvironmentService.getUsername()){
      $rootScope.username = EnvironmentService.getUsername();
    } else {
      $location.path('/login');
    }
  });
  
});