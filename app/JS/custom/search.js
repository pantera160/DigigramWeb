/**
 * Created by Pantera on 16/12/2015.
 */
var app = angular.module('USGDigigram.Search', ['ui.router']);

app.controller('SearchCtrl', ['DataRESTService', '$timeout', '$location', function (DataRESTService, $timeout, $location) {

    var searchVm = this;
    searchVm.searchString = '';

    searchVm.searchResults = [];

    searchVm.focus = false;

    searchVm.search = function () {
        DataRESTService.search(searchVm.searchString).then(function (result) {
            searchVm.searchResults = result.data;
        });
    };

    searchVm.goTo = function (userId) {
        console.log('goto ' + userId);
        $location.path("/management/details/" + userId);
    };

    searchVm.onBlur = function () {
        $timeout(function () {
            searchVm.focus = false;
        }, 1000);
    };
}]);
