'use strict';
var myCtrl = angular.module('myCtrl', []);

myCtrl.controller('MainCtrl', ["$scope", "$rootScope", "$http", function ($scope, $rootScope, $http) {
}]);

myCtrl.controller('HomeCtrl', ["$scope", function($scope){
	var avatar = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTNjMTEwODk4NyB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1M2MxMTA4OTg3Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxNC41IiB5PSIzNi41Ij42NHg2NDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==';
	$scope.messages = [];
	var i;
	for(i=0;i<10;i++){
		$scope.messages.push({'nickname': '张三', 'msg': '吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮。', 'timestamp': new Date(), 'avatar': avatar});
		$scope.messages.push({'nickname': '李四', 'msg': '吃葡萄不吐葡萄皮，不吃葡萄倒吐葡萄皮。', 'timestamp': new Date(), 'avatar': avatar});
	}
	
	$scope.input = "";
	$scope.send = function(){
		if(!$scope.input){
			return;
		}
		$scope.messages.push({'nickname': '张三', 'msg': $scope.input, 'timestamp': new Date(), 'avatar': avatar});
		$scope.input = "";
	}
}]);

