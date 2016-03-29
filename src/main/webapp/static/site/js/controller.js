'use strict';
var myCtrl = angular.module('myCtrl', []);

myCtrl.controller('MainCtrl', ["$scope", "$rootScope", "$http", '$stomp', '$log', function ($scope, $rootScope, $http, $stomp, $log) {
	$rootScope.userContext = {'nickname': '匿名用户' + new Date().getTime()};

}]);

myCtrl.controller('HomeCtrl', ["$scope", '$rootScope', '$stomp', '$log', function($scope, $rootScope, $stomp, $log){
	var avatar = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTNjMTEwODk4NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1M2MxMTA4OTg3Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNC41IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==';
	$scope.nickname = $rootScope.userContext.nickname;
	$scope.messages = [];
	$scope.isStompConnected = false;
	var connectHeaders = {};
	$stomp.setDebug(function (args) {
		$log.debug(args)
	})
	$stomp.connect('/chatroom/sockjs', connectHeaders).then(function (frame) {
		$scope.isStompConnected = true;
		var subscription = $stomp.subscribe('/topic/hello', function (payload, headers, res) {
			$scope.messages.push(payload);
			$scope.$apply()
		}, {
		})
	});
	
	$scope.input = "";
	$scope.send = function(){
		if(!$scope.input){
			return;
		}
		var message = {'nickname': $scope.nickname, 'msg': $scope.input, 'timestamp': new Date(), 'avatar': avatar};
		$stomp.send('/app/chat', message);
		$scope.input = "";
	}
}]);

