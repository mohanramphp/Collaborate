'use strict';

/* Controllers */
var controllers = {};

controllers.EmployeeIndexCtrl = function($scope, EmployeeService) {
	var init = function () { //constructor
		$scope.searchKey = "";
		$scope.findAllEmployees();
	}
	

	$scope.clearSearch = function () {
		$scope.searchKey = "";
		findAllEmployees();
	}

	$scope.search = function () {
		EmployeeService.findByName($scope.searchKey).then(function (employees) {
			$scope.employees = employees;
		});
	}

	$scope.findAllEmployees = function() {
		EmployeeService.findAll().then(function (employees) {
			$scope.employees = employees;
		});
	}
	init();
}

controllers.EmployeeDetailCtrl = function($scope, $stateParams, EmployeeService) {
	EmployeeService.findById($stateParams.employeeId).then(function(employee) {
		$scope.employee = employee;
	});
}

controllers.EmployeeReportsCtrl = function($scope, $stateParams, EmployeeService) {
	EmployeeService.findByManager($stateParams.employeeId).then(function(employees) {
		$scope.employees = employees;
	});

}

/**
* Defining Controllers in collaborate.controllers module
*/
angular.module('collaborate.controllers', []).controller(controllers);

