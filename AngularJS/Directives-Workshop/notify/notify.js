var app = angular.module('notify', []);

app.directive('notify',function($q){
  return {    
    restrict: 'AE',
    scope:{
      request: '&',
      title: '=',
      body: '=',
      icon: '='
    },
    //templateUrl: notificationIndex.html,
    link: function(scope, element, attr){
      var deferred = $q.defer();
      console.log("scope", scope);
      console.log("element", element);
      console.log("attr", attr);
      var Notification = window.Notification || window.mozNotification || window.webkitNotification;
      Notification.requestPermission(function (permission) {
        console.log(permission);
        if(permission === 'granted'){
          console.log(scope.title);
          element.bind('click', function(){
            var notification = new Notification(scope.title, {body: scope.body, icon: scope.icon});
            console.log(notification);
          });
        }
      });
    }
 }
});
