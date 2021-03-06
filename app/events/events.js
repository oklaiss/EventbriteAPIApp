'use strict';

angular.module('myApp.events', ['ngRoute'])

// routing configuration
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/events', {	// events routing/controller
    templateUrl: 'events/events.html',
    controller: 'EventsCtrl'
  }).when('/calendar', {	// calendar routing/controller
    templateUrl: 'calendar/calendar.html',
    controller: 'CalendarCtrl'
  });
}])

// controller for events view
.controller('EventsCtrl', function($scope, ergastAPIservice) {

	$scope.showLoading = true;
	$scope.showResults = false;

	$scope.listEvents = [];

	// logic to be able to search and filter results by event name
	$scope.searchFilter = function(event) {
		var keyword = new RegExp($scope.eventFilter, 'i');
		return !$scope.eventFilter || keyword.test(event.name.text);
	};

	// calling API service
	ergastAPIservice.getEvents().success(function (response) {
		//Dig into JSON response here to get just events
		$scope.showLoading = false;
		$scope.showResults = true;
		$scope.listEvents = response.events;
	});

	// sample event JSON array
	// $scope.events = [
	// 			{
	// 				"name": "This is the first event",
	// 				"url": "www.google.com",
	// 				"start": "2016-02-02"
	// 			},
	// 			{
	// 				"name": "This is the second event",
	// 				"url": "www.facebook.com",
	// 				"start": "2016-02-04"
	// 			}
	// ]

})

// controller for calendar view
.controller('CalendarCtrl', function($scope, ergastAPIservice) {

	$scope.loadingCalendar = true;

	// define array for FullCalendar
	// $scope.eventSources = [];

		$scope.eventSources = [	// put the array in the 'events' property
			[
			]
		]

	console.log($scope.eventSources);

	// API call
	ergastAPIservice.getEvents().success(function (response) {
		// Dig into JSON response here
		var json = response.events;
		// Format to work with AngularJS FullCalendar (Limiting to 500 for now for performance reasons)
		for(var i = 0; i < 500; i++) {
    	var obj = json[i];
    	try {
    		var title = obj.name.text;
    	} catch(err) {
    		continue;
    	}
    	try {
    		var start = obj.start.local;
    	} catch(err) {
    		continue;
    	}
    	console.log(title);
    	console.log(start);

    	// create json object
    	var oneEvent = { title : title, start : start };

    	console.log("oneEvent" + oneEvent);

    	// push event to eventSources array
    	$scope.eventSources[0].push(oneEvent);

		}
		$scope.loadingCalendar = false;
		// JSON.stringify(result);
		// $scope.eventSources = result;
		console.log($scope.eventSources);

	});

	

});
