'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('USGDigigram', [
    'ngRoute',
    'ui.router',
    'USGDigigram.version',
    'USGDigigram.Overview',
    'USGDigigram.Breadcrumbs',
    'USGDigigram.Details',
    'USGDigigram.Employer_Overview',
    'USGDigigram.Search',
    'USGDigigram.Admin'
]);


app.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider, breadcrumbs) {
    $urlRouterProvider.otherwise('/Dircom');

    $stateProvider.state('admin', {
            url: '/admin',
            views: {
                "content": {
                    templateUrl: 'templates/admin.html'
                }
            }
        })
        .state('dept', {
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
        .state('company', {
            url: '/company/:company',
            views: {
                "view-breadcrumbs": {
                    templateUrl: 'templates/breadcrumbs.html',
                },
                "content": {
                    templateUrl: 'templates/employer_overview.html',
                }
            }
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
    this.getCompany = function (companyname) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'company/' + companyname
        })
    };
    this.getCompanyEmployees = function (companyname) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'companyemployees/' + companyname
        })
    };
    this.getTest = function () {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'test'
        });
    };
    this.search = function (searchString) {
        return $http({
            method: 'GET',
            url: initParams.RESTUrl + 'search/' + searchString
        })
    };
    this.runUpdate = function () {
        return $http({
            method: 'GET',
            url: initParams.DBControllerURL + 'run'
        })
    };
    this.getSpeakapEntries = function () {
        return $http({
            method: 'GET',
            url: initParams.DBControllerURL + 'speakaps'
        })
    };
    this.addSpeakap = function (speakapuser) {
        return $http({
            method: 'POST',
            url: initParams.DBControllerURL + 'newspeakap',
            data: speakapuser
        });
    };
    this.deleteSpeakap = function (id) {
        return $http({
            method: 'DELETE',
            url: initParams.DBControllerURL + 'deletespeakap',
            data: id
        });
    };
    this.getAllDepts = function () {
        return $http({
            method: 'GET',
            url: initParams.DBControllerURL + 'departments'
        });
    };
    this.deleteDept = function (id) {
        return $http({
            method: 'DELETE',
            url: initParams.DBControllerURL + 'deletedepartment',
            data: id
        });
    };
    this.addDept = function (dept) {
        return $http({
            method: 'POST',
            url: initParams.DBControllerURL + 'newdepartment',
            data: dept
        });
    };
    this.getAllEmployees = function () {
        return $http({
            method: 'GET',
            url: initParams.DBControllerURL + 'employees'
        })
    };
    this.deleteEmployee = function (EID) {
        return http({
            method: 'DELETE',
            url: initParams.DBControllerURL + 'deleteemployee',
            data: EID
        })
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
});




