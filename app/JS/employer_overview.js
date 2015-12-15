/**
 * Created by Pantera on 15/12/2015.
 */
var app = angular.module('USGDigigram.Employer_Overview', ['720kb.tooltips', 'ui.router']);
app.controller('Employer_OverviewCtrl', ['DataRESTService', '$scope', '$stateParams', 'Breadcrumbs', function (DataRESTService, $scope, $stateParams, Breadcrumbs) {

    $scope.companyName = $stateParams.company;

    var getCompanyData = function () {
        DataRESTService.getCompany($stateParams.company).then(function (result) {
            $scope.company = result.data;
        });
        DataRESTService.getCompanyEmployees($stateParams.company).then(function (result) {
            $scope.members = [];
            $scope.members_profiles = result.data;
            angular.forEach($scope.members_profiles, function (value, key) {
                $scope.members.push(key);
            });
        });
    };

    $scope.createUrl = function (eid) {
        var member = $scope.members_profiles[eid];
        if (member.nextDept == null) {
            return "#/" + member.dept.name + "/details/" + member.userId.id;
        }
        else {
            return "#/" + member.nextDept;
        }
    };

    $scope.company = {};

    $scope.members = [];

    $scope.members_profiles = {};

    getCompanyData();
}]);
