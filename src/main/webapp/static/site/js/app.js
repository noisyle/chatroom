'use strict';
var myApp = angular.module('myApp', ['ngAnimate', 'ui.router', 'ui.bootstrap', 'uiRouterStyles', 'duScroll', 'ngStomp', 'myCtrl']);
myApp.config(['$stateProvider', '$urlRouterProvider',  '$locationProvider', '$httpProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise("/home");
  $stateProvider
  .state("home", {
  	url: "/home",
  	templateUrl: "home.html",
  	data: {
  	  pageTitle: "Chat",
  	  css: "static/site/css/home.css"
  	},
  	controller: "HomeCtrl"
  });
  
  
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
  //Override $http service's default transformRequest
  $httpProvider.defaults.transformRequest = [function(data) {
    /**
     * The workhorse; converts an object to x-www-form-urlencoded serialization.
     * @param {Object} obj
     * @return {String}
     */
    var param = function(obj) {
      var query = '';
      var name, value, fullSubName, subName, subValue, innerObj, i;
      for (name in obj) {
        value = obj[name];
        if (value instanceof Array) {
          for (i = 0; i < value.length; ++i) {
            subValue = value[i];
            fullSubName = name + '[' + i + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value instanceof Object) {
          for (subName in value) {
            subValue = value[subName];
            fullSubName = name + '[' + subName + ']';
            innerObj = {};
            innerObj[fullSubName] = subValue;
            query += param(innerObj) + '&';
          }
        } else if (value !== undefined && value !== null) {
          query += encodeURIComponent(name) + '='
              + encodeURIComponent(value) + '&';
        }
      }
      return query.length ? query.substr(0, query.length - 1) : query;
    };
    return angular.isObject(data) && String(data) !== '[object File]'
        ? param(data)
        : data;
  }];
}]);

myApp.directive('title', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function() {
        var listener = function(event, toState) {
          $timeout(function() {
            $rootScope.title = (toState.data && toState.data.pageTitle) 
            ? toState.data.pageTitle 
            : 'Chat';
          });
        };
        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);

