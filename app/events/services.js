angular.module('myApp.services', []).
	factory('ergastAPIservice', function($http) {
		var ergastAPI = {};
		ergastAPI.getEvents = function() {
			return $http({
				method: 'GET',
				url: 'https://www.eventbriteapi.com/v3/events/search/?popular=on&sort_by=best&token=ITQQDX3I7LU7YNIS4KJ3'
			})
		}

		return ergastAPI;
	})