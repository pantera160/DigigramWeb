/**
 * Created by Pantera on 4/12/2015.
 */
var app = angular.module('USGDigigram.Details', ['ui.router', '720kb.tooltips']);
app.controller("DetailsCtrl", ['$scope', '$stateParams', function($scope, $stateParams){
    var dept = $stateParams.dept;
    var id = $stateParams.id;
    console.log(id);

    $scope.user = {
        'id' : '12345abcde6789tl',
        'firstName' : 'Tom',
        'lastName' : 'Lecluyse',
        'intern': true,
        'profilePicURI' : 'https://usgprofessionalsbe.speakap.com/files/0f66dcc4e40c7750/profile-image',
        'project' : {
            'name' : 'Managing ICT',
            'skills' : ['Management', 'Stress relieve']
        },
        'tel' : '+32 (0)478/94 56 12',
        'mail' : 'tom.lecluyse@usgict.be'
    }
}]);

