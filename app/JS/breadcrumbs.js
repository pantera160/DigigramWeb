/**
 * Created by Pantera on 03/12/15.
 */
var app = angular.module('USGDigigram.Breadcrumbs', ['ui.router']);

app.controller('BreadcrumbCtrl', ['$scope', 'DataRESTService', '$stateParams', function ($scope, DataRESTService, $stateParams) {
    $scope.breadcrumbs = [{
        'string': 'Home',
        'link': '#'
    }];

    var createBreadcrumbs = function () {
        var url = "#";
        if ($stateParams.dept) {
            console.log('found dept');
            url += '/' + $stateParams.dept;
            $scope.breadcrumbs.push({
                'string': $stateParams.dept,
                'link': url
            })
        }
        if($stateParams.id){
            console.log("found id");
            DataRESTService.getBasic($stateParams.id).then(function(response){
                url += '/details/'+$stateParams.id;
                $scope.breadcrumbs.push({
                    'string': response.data.firstName + " " + response.data.lastName,
                    'link': url
                })
            });
            }
    };

    createBreadcrumbs();
}]);


