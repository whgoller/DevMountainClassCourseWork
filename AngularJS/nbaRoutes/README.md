NbaRoutes
========

*For this project you're going to need to serve your files through a server. 
Open up your terminal and (if you have Node/NPM), run 'sudo npm install -g http-server'. 
Now once you want to check out your code, cd into your folder and run 'http-server'. 
You should see something like 'Starting up http-server, serving ./ on: http://0.0.0.0:8080'. 
Now go to 'localhost:8080' and you should see your application.

NBA Routes is the first exposure you'll get to building a full fledge app with more than just one 'route'. 
http://tylermcginnis.github.io/nbaRoutes is the full working version of this application. 
The big thing to notice is that each route, whether it's the Jazz, Heat, or Laker page, are all loading in data (using Resolve) before the route loads. 
Also, the home page is loading in every teams data before the route loads. In this repo you'll continue to practice fundamental Angular principles you've 
learned like controllers, services, promises and getting data from RESTful API's while also learning new concepts like routing and resolving data.

##Step 1: Clone and Dissect the Repo
* Fork and clone this repository.
* Take a look at this existing code that's already in place. 
  Notice there are already a few things included for you including images, defaultHeaders.js which is making parse work, and ngRoute is already included in your HTML 
  and as a dependency in your application ['ngRoute']. 
  Normally you would have to include ngRoute because it no longer comes built in with Angular. 
  Also, notice there are two folders (home and teams) in your js folder. The 'home' folder is going to contain a view (.html file), a controller, 
  and service which all have to do with the home (or index) page. In your 'teams' folder there is going to be a controller, service, and another view. 
  All these files have to do with the three (Jazz, Heat, and Lakers) routes. Notice how we've broken routes into folders, this is a very easy way to keep things very modular.
* Check out the index.html page. Notice there are a few things going on. We've included nbaRoutes as the name of our app, mainCtrl as a controller over our whole main-container, a menu that's going to be at the top of the page, and under all that but still inside main-container is ng-view. This piece is crucial to understanding how routing works. That simple <ng-view> holds the power to the universe, or at least this app with different routes. The router is going to take that element and is going to inject certain templates (html pages) into it depending on which route we're using. The template that is injected into the <ng-view> element depends entirely on what we specify inside of our Router in our app.js file. With our router, we're able to specify dynamic templates and controllers based on the URL.
* Once you feel VERY comfortable with the existing codebase, move on to Step 2.

##Step 2: Configure our teamService.js file
* This app is going to be very dependent on using 'resolve' in your router. As we talked about during the lecture, resolve will call a method on our service, resolve that method's promise, then make the data that's being returned from that method available immediately in our controller. 
* In your teamService.js file make a method called addNewGame. This method is going to take in a gameObject as the parameter. That gameObj will eventually have data about each individual game that we'll send to parse.
* In the addNewGame method create a variable called 'url' and set it equal to "https://api.parse.com/1/classes/" + gameObj.homeTeam; Notice each team's games are going to be stored at a RESTful endpoint which points to the teams specific name (gameObj.homeTeam).
* After you've created the url variable, make an if statement that is going to check to see if the home team score (gameObj.homeTeamScore) is greater then the opponents core (gameObj.opponentScore). If it is, set a property called 'won' on the gameObj to true. If it is not, (or if the home team lost), set that win property on the gameObj to false. One gotcha here is that gameObj.homeTeamScore and gameObj.opponentScore are both strings, you'll need to make them integers before you compare them. To do that, use the parseInt method. parseInt("7") will return 7 the integer.
* Now in that same addNewGame method under your if statement, we're going make a POST request to parse adding the gameObj to our URL we made earlier. So, return the result of making an $http request with the 'method' of 'POST', the 'url' being the URL variable we made earlier, and 'data' being our gameObj.
* Now that our service has an addNewGame function, let's make a getTeamData function which is going to accept a team parameter and fetch the data of that specific team. 
* Creat a function on your service object called getTeamData that accepts a parameter of team.
* Create a deferred object using $q.defer(); then at the bottom of that function return that promise object (deferred.promise)
* Create a variable called url which will be set to 'https://api.parse.com/1/classes/' + team;
* Now, make a 'GET' request using $http to the url of the variable we just made.
* We're not going to return that object but instead we're going to modify the data we got back from that request before we resolve our own promise we made earlier. So add a .then to the end of the $http request and give .then a function that accepts 'data' as the parameter. Remember, data will be the actual data we get back from parse when we make a GET request to the specified URl we made earlier.
* Inside the .then function, make a variable called results and set it equal to data.data.results, which is the actual games the team has played.
* Create two variables, one called wins and one called losses and set them both equal to 0. 
* Loop over results (which is an array of game objects) and check the .won property on each object in the results array, if the .won property is true, increment wins by 1. If .won is not true, increment losses by 1. Now what we've done is gone through all of the games and we now know how many wins and losses that team has.
* Now that we have complete wins and losses variables, we need to somehow access those variables outside of our service. We know that we have a results array which holds an array of all the games the particular team has played. What if we do something a little unconventional here. We know we're going to eventually resolve our promise we made earlier with the results variable (so we can access all the games in our controller). We also know that an array is really just an object at heart. Let's add a 'wins' property to the results array and set it equal to our wins variable and let's also set a 'losses' property on our results array and set it equal to our losses variable. I know this is a little weird because we're not adding items to our array like we usually do but instead we're adding properties to this array. It's a good reminder that arrays are just objects. Once you add the wins and losses property, go ahead and resolve our deferred object we made earlier with our results array.
* Now that we've set up those two methods on our teamService object, we can close teamService. We won't need to modify this file again but we will need to call the methods we set up in teamService.js later.

##Step 3: Start to Configure the Router
* As I mentioned in step 1, setting up the router is perhaps the most important part of this entire application. Our router is going to decide which template and controller get used based on what URL we're currently on.
* Open up your app.js file. We're going to ignore our index (/) page for a little bit while we set up each teams specific routes. So for now, modify your router so whenever the user is at the index page (/), have the templateUrl be js/home/homeTmpl.html and the controller be 'homeCtrl'.
* Now we're going to set up the individual team's routes. It's important to understand that all three teams (Jazz, Lakers, Heat) are going to be using the same Controller and the same Template.
* Whenever the user goes to '/teams/:team' use 'js/teams/teamTmpl.html' as the templateUrl and use 'teamCtrl' as the controller. 
* Take note of the /:team that's in the URL. Remember, that makes it so your application is able to keep track of certain states based on which team is located in the URL. For example, when the user visits yoursite.com/teams/utahjazz, in our controller $routeParams.team is going to be equal to 'utahjazz'. This allows us to then pass in the specific team into our getTeamData method that's on our service and get only that teams data. Also note that the menu in our index.html page have links that point to the different teams (which will be caught by :team in our router).
* Now that our templateUrl and our controller are set up for the /teams/:team url, we want to have some data ready for us before that route loads. In this case, that data we want available in our controller is the specific teams data. 
* Below where we specify the controller create a resolve blog with the key being 'resolve' and the value being an object. That object is going to have a method called teamData which returns the promise that gets returned from teamService.getTeamData(). That was really wordy I know. Look up the syntax for how resolve works. What's going to happen is we're going to call the getTeamData method on our teamService service. That will return a promise which will then be resolved and the data we get back from that promise will then be available to us in our controller as teamData, so head over to your teamCtrl.js file and add teamData as a parameter which is passed into your controller. 
* You might have noticed that we're calling the getTeamData method on our teamService service but that method requires a parameter which should be the specific team whose data we want, ie utahjazz, miamiheat, or losangeleslakers. Remember, we know which team's data we want to get based on the :team parameter in our route. We get access to that variable in our resolve block by using $route.current.params.team. So now go ahead and pass $route.current.params.team into your getTeamData method call.
* Let's make one last change to the router for now. Add a .otherwise block so that the router will redirect to the index page if the route the user types in is not recognized.

##Step 4: Configure the teamCtrl.js File
* Head over to your teamCtrl.js file. Notice we should have four thing that are being passed into the controller. $scope, $routeParams to give us access to :team in the url, teamService which gives us access to getting the teams data and adding new games, and teamData which we should have added last step which gives us the data the is being returned from teamService.getData in our resolve block in the app.js file. 
* First thing we want to do is get the data (getData) that is being resolved in our app.js file and put that data on the scope. So in your controller set teamData (that is being passed in) equal to $scope.teamData so now that data is on our scope and can be accessed in the view.
* Once you do that create a property on the $scope object called newGame and set it equal to an empty object. This is the object that is going to be passed to teamSerivce.addNewGame later on. 
* Create another property on the scope object called showNewGameForm and set it equal to false. Then create a method on our scope object called toggleNewGameForm which takes the current value of $scope.showNewGameForm and makes it the opposite of what it currently is. We're going to use both of these properties later on in our view to toggle the form to add a new game.
* Now is where we want to see which team's value we should get. Remember this is entirely based on the url. If the user is at /teams/utahjazz we want to get the jazz's information. But if they're at /teams/miamiheat we want to get the heats information. Luckily we set up router so that whatever team is in the URL, that value would be the current value of $routeParams.team in our controller. 
* Create an if statement and check which team the current URL is on (utahjazz, losangeleslakers, or miamiheaet). Depending on which team the URL is on, do the following for each team. Set a property on the scope called homeTeam that is equal to 'Utah Jazz', 'Los Angeles Lakers', or 'Miami Heat'. Also, (depending on which team), add a property to the scope called logoPath that points to the image of the team. For example, if $routeParams.team is equal to 'utahjazz', $scope.homeTeam is going to equal 'Utah Jazz' and $scope.logoPath is going to equal 'images/jazz-logo.png'.
* Now we want to create a method on our scope object that will be called whenever someone submits a new game.
* Create a method on scope called submitGame.
* First thing we want to do is take the homeTeam property that we set on the scope earlier and strip out the spaces so we can use it as an endpoint in our restAPI. Add a property onto our newGame object that is already on the scope called homeTeam and set it equal to $scope.homeTeam.split(' ').join('').toLowerCase() 
* Now we want to call the addNewGame method on our teamService method. So call addNewGame and pass it $scope.newGame
* Take a look at the teamService.js file and notice what addNewGame returns. 
* You should have noticed it returns a promise. That means immediately after we call addNewGame we can call .then()
* Call .then and pass it a callback function, this function is then going to call the getTeamData service passing it $scope.newGame.homeTeam. Notice what we're doing. We've added a new game to the home teams schedule and now we need to go and get the new data that's in our database.
* You should notice that the getTeamData method is also returning a promise. So just like before, call .then immediately after you call getTeamData() and give it a callback function which accepts parameter (which is going to be the data returned from the getTeamData method)
* Now we want to set a few properties on our scope based off the data we got from our promise. First, set $scope.teamData equal to the data you got back from the promise. Then, reset $scope.newGame to be an empty object, then set $scope.showNewGameForm back to false.

##Step 5: Set up for teamTmpl file
* Now is the fun part. If everything is working correctly, our team controller and team service should be set up and now all we need to do is put that data onto the view.
* Head over to your teamTmpl.html file and check it out. 
* Notice that there are a lot of ????????. All of those need to be filled in with properties that are on the teamCtrl. This could be really hard or really easy depending on how you tackle the problem. If it were me, I would console.log the $scope object to see all the properties that you're able to use. 
* Fill in all the ???????? with the correct models. Once you do that, make sure you have http-server running and head over to localhost:8080/#/teams/utahjazz and see if everything is working as expected. If it is, great. If not, open up your console and start debugging.

##Step 6: Configure the Home Page.
* Go back and check out the live example at http://tylermcginnis.github.io/nbaRoutes . Notice that each team has their own URL in the menu but also the home page is taking all three teams and comparing them side by side. Your job is to now make that possible. You'll need to edit the files in the 'home' folder and also your router in app.js to make it work as expected. 
* This is going to be really, really hard but if you finish it, you'll be glad you did. If you finish this step, find me (Tyler). All those who finish will be put in a raffle. Winner gets a $50 GiftCard to Amazon.
