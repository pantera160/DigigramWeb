/**
 * Created by Pantera on 03/12/15.
 */
var app = angular.module('USGDigigram.Overview', ['720kb.tooltips', 'ui.router']);
app.controller('OverviewCtrl', ['DataRESTService','$scope', '$stateParams', function(DataRESTService, $scope, $stateParams){

    $scope.dept = $stateParams.dept;

    var getDeptData = function(){
        DataRESTService.getManager($scope.dept).then(function(result){
            $scope.manager = result.data;
        }) ;
        DataRESTService.getDeptMembers($scope.dept).then(function(result){
            $scope.members = [];
            $scope.members_profiles = result.data;
            angular.forEach($scope.members_profiles, function(value, key){
               $scope.members.push(key);
            });
        });
        DataRESTService.getTest().then(function(result){
            console.log(result);
        });
    };

    $scope.createUrl = function(eid){
        var member = $scope.members_profiles[eid];
        if(member.nextDept == null){
            return "#/"+$scope.dept + "/details/" + member.userId.id;
        }
        else{
            return "#/"+member.nextDept;
        }
    };

    $scope.manager = {};

    $scope.members = [];

    $scope.members_profiles = {};

    getDeptData();
}]);


