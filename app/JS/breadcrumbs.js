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
            /*DataRESTService.getName($stateParams.id).then(function(response){
                url += '/details/'+id;
                $scope.breadcrumbs.push({
                    'string': response,
                    'link': url
                })
            });*/
            url += '/details/'+$stateParams.id;
            $scope.breadcrumbs.push({
                'string': 'Tom Lecluyse',
                'link': url
            })
        }
    };

    createBreadcrumbs();
}]);


