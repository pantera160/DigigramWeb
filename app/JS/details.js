/**
 * Created by Pantera on 4/12/2015.
 */
var app = angular.module('USGDigigram.Details', ['ui.router', '720kb.tooltips']);
app.controller("DetailsCtrl", ['$scope', '$stateParams', 'DataRESTService', function($scope, $stateParams, DataRESTService){
    var dept = $stateParams.dept;
    var id = $stateParams.id;
    console.log(id);

    var getData = function(){
        DataRESTService.getAdvanced(id).then(function(result){
            $scope.user = result.data;
        });
    };

    $scope.user = {};

    getData();
}]);

