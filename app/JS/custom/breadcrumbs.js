/**
 * Created by Pantera on 03/12/15.
 */
var app = angular.module('USGDigigram.Breadcrumbs', ['ui.router']);

app.controller('BreadcrumbCtrl', ['$scope', 'DataRESTService', '$stateParams', 'Breadcrumbs', function ($scope, DataRESTService, $stateParams, Breadcrumbs) {
    $scope.breadcrumbs = Breadcrumbs.breadcrumbs;

    var createBreadcrumbs = function () {
        var url = "#";
        if ($stateParams.dept) {
            var deptname = $stateParams.dept.replace(/_/g, " ");
            console.log('found dept');
            for (var i = 0; i < $scope.breadcrumbs.length; i++) {
                if ($scope.breadcrumbs[i].string === deptname) {
                    Breadcrumbs.breadcrumbs = [];
                    for (var j = 0; j < i; j++) {
                        Breadcrumbs.breadcrumbs.push($scope.breadcrumbs[j]);
                    }
                    $scope.breadcrumbs = Breadcrumbs.breadcrumbs;
                    break;
                }
            }
            url += '/' + $stateParams.dept;
            $scope.breadcrumbs.push({
                'string': deptname,
                'link': url
            })
        }
        if ($stateParams.id) {
            console.log("found id");
            DataRESTService.getBasic($stateParams.id).then(function (response) {
                url += '/details/' + $stateParams.id;
                $scope.breadcrumbs.push({
                    'string': response.data.firstName + " " + response.data.lastName,
                    'link': url
                })
            });
        }
    };

    createBreadcrumbs();
}]);


