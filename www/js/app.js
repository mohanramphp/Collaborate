// angular.module is a global place for creating, registering and retrieving Angular modules
// 'collaborate' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'collaborate.services' is found in services.js
// 'collaborate.controllers' is found in controllers.js
angular.module('collaborate', ['ionic', 'collaborate.factories', 'collaborate.controllers'])


    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('employee-index', {
                url: '/employees',
                templateUrl: 'templates/employee-index.html',
                controller: 'EmployeeIndexCtrl'
            })

            .state('employee-detail', {
                url: '/employee/:employeeId',
                templateUrl: 'templates/employee-detail.html',
                controller: 'EmployeeDetailCtrl'
            })

            .state('employee-reports', {
                url: '/employee/:employeeId/reports',
                templateUrl: 'templates/employee-reports.html',
                controller: 'EmployeeReportsCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/employees');

    });
