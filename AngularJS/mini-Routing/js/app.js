var app = angular.module('routingApp',['ngRoute']);
        
app.config(function($routeProvider){
  console.log('config');
  $routeProvider
  .when('/', {
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .when('/settings', {
    templateUrl: 'js/settings/settingsTmpl.html',
    controller: 'settingsCtrl'
  })
  .when('/products/:id', {
    templateUrl: 'js/products/productsTmpl.html',
    controller: 'productsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
     console.log('config2');
});