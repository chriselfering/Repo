var module = angular.module('myapp', []);

module.service('userService', function(){
	this.users = ['John', 'James', 'Jake'];
});
//=========================================
module.factory('userService', function(){
	var fac = {};
	fac.users = ['John', 'James', 'Jake'];
	return fac;
});
//=========================================
app.controller('CalculatorController', function($scope, CalculatorService) {
    $scope.doSquare = function() {
        $scope.answer = CalculatorService.square($scope.number);
    }
    $scope.doCube = function() {
        $scope.answer = CalculatorService.cube($scope.number);
    }
});
