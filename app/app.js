'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.calendar',
  'ui.bootstrap',
  'myApp.view1',
  'myApp.about',
  'myApp.events',
  'myApp.services'
  // 'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
