Angular JS III ($http and Promises - Chatroom) -Day 1
Basics of JSON/AJAX:
    


what is the point of the controller? traffic cop that controls using the $scope and controls the view. controller has downstream control over the view with the $scope.

$scope allows for an abstract control of the view.


service can be injected anywhere after it has been declared.

dependency injection - the string in the controller function must match exactly the service, because it does string matching.

parts to an HTTP request
 1. Remote address  443 is SSL and 80 is http
 		1.1	 port 443 is the https
 2. Request 
 3. API key
 4. Application-Id
 5. API key



AJAX (asyncronous )

$http is Angulars AJAX library. 

restAngular, dolarResouse are both libraries like $http.

promises are callbacks
promises are not native to javascript but is another way to handle 
promises are implemented on top of javascript by using javascript callbacks
$q is a promise library built into Angular
use $q to create deferred object
the deffered object has 3 parts that we care about.
notify 
reject 
resolve

$q is used in the service use $http in the controller.

$http is using $q behind the scense.





JSONP request that can use the $http

is the end run around to make the browser pretend its a server to get around the Access-Control-Allow-Origin "security"

"REST or RESTFUL Services"(Representaitonal State transfer) this is an architecture and standard.
GET - gets the data
POST - saves data
DELETE - deletes data
PUT - matches the id and writes over the top of it.
PATCH  - matches the id and only writes the things specified



