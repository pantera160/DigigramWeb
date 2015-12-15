'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('USGDigigram', [
    'ngRoute',
    'ui.router',
    'USGDigigram.version',
    'USGDigigram.Overview',
    'USGDigigram.Breadcrumbs',
    'USGDigigram.Details'
]);

/*app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
 $routeProvider.when('/:dept', {
 templateUrl: 'templates/overview.html'
 })
 .otherwise({redirectTo: '/ICT'});
 }])
 ;*/

app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider, breadcrumbs) {
    $urlRouterProvider.otherwise('/management');

    $stateProvider.state('dept', {
            url: '/:dept',
            views: {
                "view-breadcrumbs": {
                    templateUrl: 'templates/breadcrumbs.html',
                },
                "content": {
                    templateUrl: 'templates/overview.html',
                }
            }
        })
        .state('details', {
            url: '/:dept/details/:id',
            views: {
                "view-breadcrumbs": {
                    templateUrl: 'templates/breadcrumbs.html',
                },
                "content": {
                    templateUrl: 'templates/details.html',
                }
            }
        })
        .state('home', {
            url: '/'
        })
}]);

app.service('DataRESTService', function ($http) {
    var initParams = {};
    this.initialise = function () {
        $http.get('resources/config.properties').then(function (result) {
            initParams = result.data;
            console.log(initParams);
        });
        return initParams.RESTUrl;
    };

    this.getManager = function (dept) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'deptmanager/' + dept
        });
    };

    this.getDeptMembers = function (dept) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'ccmembers/' + dept
        });
    };

    this.getMembers = function (cc) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'ccmembers/' + cc
        });
    };
    this.getBasic = function (eid) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'basic/' + eid
        });
    };
    this.getAdvanced = function (eid) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'advanced/' + eid
        });
    };
    this.getTest = function () {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'test'
        });
    };
});

app.run(['DataRESTService', 'Breadcrumbs', '$rootScope', function (DataRESTService, Breadcrumbs, $rootScope) {
    DataRESTService.initialise();
}]);

app.service('Breadcrumbs', function () {
    this.breadcrumbs = [{
        'string': 'Home',
        'link': '#'
    }];
})




