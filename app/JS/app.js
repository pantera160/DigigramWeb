'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('USGDigigram', [
    'ngRoute',
    'ui.router',
    'USGDigigram.version',
    'USGDigigram.Overview'
]);

/*app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/:dept', {
            templateUrl: 'templates/overview.html'
        })
        .otherwise({redirectTo: '/ICT'});
}])
;*/

app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/ICT');

    $stateProvider.state('dept',{
        url: '/:dept',
        views: {
            "view-breadcrumbs" : {templateUrl: 'templates/breadcrumbs.html'},
            "content" : {templateUlr: 'templates/overview.html'}
        }
    })
}]);

app.service('DataRESTService', function ($http) {
    var initParams = {};
    this.initialise = function () {
        $http.get('resources/config.properties').then(function (result) {
            initParams = result;
        });
        return initParams.RESTUrl;
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

app.run(['DataRESTService', function (DataRESTService) {
    DataRESTService.initialise();
}]);




