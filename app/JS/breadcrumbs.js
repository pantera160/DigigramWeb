/**
 * Created by Pantera on 03/12/15.
 */
var app = angular.module('Breadcrumbs', ['ui.router']);

app.controller('BreadcrumbCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.breadcrumbs = [{
        'string': 'Home',
        'link': '#'
    },{'string': 'ICT', 'link': '/ICT'}];

    console.log("Log: " + $stateParams)

/*var createBreadcrumbs = function () {
 console.log('creating breadcrumbs');
 console.log($routeParams);
 var url = "";
 console.log($scope.breadcrumbs);
 if ($routeParams.dept) {
 console.log('found dept');
 url += '/' + $routeParams.dept;
 $scope.breadcrumbs.push({
 'string': $routeParams.dept,
 'link': url
 })
 }
 else {
 console.log('no dept found');
 }*/
 }]);


