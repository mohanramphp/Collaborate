'use strict';

/* Factories */
var factories = {};

factories.EmployeeService = function($q) {
	var employees = [
		{
			"id": 1,
			"firstName": "Mohan Ram",
			"lastName": "Rathinakumar",
			"managerId": 0,
			"managerName": "",
			"reports": 4,
			"title": "President and CEO",
			"department": "Corporate",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Theni, Tamilnadu",
			"pic": "12.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 2,
			"firstName": "Ramya",
			"lastName": "Radhakrishnan",
			"managerId": 1,
			"managerName": "Mohan Ram",
			"reports": 2,
			"title": "Director of Digital Marketing",
			"department": "Marketing",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Madurai, Tamilnadu",
			"pic": "10.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 3,
			"firstName": "Saravanan",
			"lastName": "Sivan",
			"managerId": 1,
			"managerName": "Mohan Ram",
			"reports": 0,
			"title": "CTO",
			"department": "Accounting",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Theni, Tamilnadu",
			"pic": "9.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 4,
			"firstName": "Vidhya",
			"lastName": "Krish",
			"managerId": 1,
			"managerName": "Mohan Ram",
			"reports": 3,
			"title": "VP of Marketing",
			"department": "Marketing",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Karur, Tamilnadu",
			"pic": "1.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 5,
			"firstName": "Roy",
			"lastName": "Moore",
			"managerId": 1,
			"managerName": "Mohan Ram",
			"reports": 2,
			"title": "VP of Sales",
			"department": "Sales",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Pune, Maharashtra",
			"pic": "4.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 6,
			"firstName": "Raj",
			"lastName": "John",
			"managerId": 4,
			"managerName": "Vidhya",
			"reports": 0,
			"title": "QA Manager",
			"department": "Engineering",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Solapur, Maharashtra",
			"pic": "5.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 7,
			"firstName": "Geetha",
			"lastName": "Muthu",
			"managerId": 4,
			"managerName": "Vidhya",
			"reports": 0,
			"title": "Software Architect",
			"department": "Engineering",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Daund, Maharashtra",
			"pic": "6.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 8,
			"firstName": "Balaji",
			"lastName": "N",
			"managerId": 2,
			"managerName": "Ramya",
			"reports": 0,
			"title": "Marketing Manager",
			"department": "Marketing",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Nasik, Maharashtra",
			"pic": "7.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 9,
			"firstName": "Kathir",
			"lastName": "S",
			"managerId": 2,
			"managerName": "Ramya",
			"reports": 0,
			"title": "Marketing Manager",
			"department": "Marketing",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Chennai, TN",
			"pic": "8.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 10,
			"firstName": "Selvam",
			"lastName": "A",
			"managerId": 5,
			"managerName": "Roy Moore",
			"reports": 0,
			"title": "Sales Representative",
			"department": "Sales",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Boston, MA",
			"pic": "11.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 11,
			"firstName": "Pradeep",
			"lastName": "Sankar",
			"managerId": 5,
			"managerName": "Roy Moore",
			"reports": 0,
			"title": "Sales Representative",
			"department": "Sales",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Newyork, MA",
			"pic": "3.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		},
		{
			"id": 12,
			"firstName": "Satish",
			"lastName": "G",
			"managerId": 4,
			"managerName": "Vidhya",
			"reports": 0,
			"title": "Software Architect",
			"department": "Engineering",
			"cellPhone": "9578352645",
			"officePhone": "201-802-1231",
			"email": "mohanramphp@gmail.com",
			"city": "Miami, CA",
			"pic": "2.jpg",
			"twitterId": "@twitter",
			"blog": "http://mohanram.co.cc/blog"
		}
	];

	// We use promises to make this api asynchronous. This is clearly not necessary when using in-memory data
	// but it makes this service more flexible and plug-and-play. For example, you can now easily replace this
	// service with a JSON service that gets its data from a remote server without having to changes anything
	// in the modules invoking the data service since the api is already async.

	return {
		findAll: function() {
			var deferred = $q.defer();
			deferred.resolve(employees);
			return deferred.promise;
		},

		findById: function(employeeId) {
			var deferred = $q.defer();
			var employee = employees[employeeId - 1];
			deferred.resolve(employee);
			return deferred.promise;
		},

		findByName: function(searchKey) {
			var deferred = $q.defer();
			var results = employees.filter(function(element) {
				var fullName = element.firstName + " " + element.lastName;
				return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
			});
			deferred.resolve(results);
			return deferred.promise;
		},

		findByManager: function (managerId) {
			var deferred = $q.defer(),
				results = employees.filter(function (element) {
					return parseInt(managerId, 10) === element.managerId;
				});
			deferred.resolve(results);
			return deferred.promise;
		}
	}
}

/**
* Defining Factories
*/
angular.module('collaborate.factories', []).factory(factories);
