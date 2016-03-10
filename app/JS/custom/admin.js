var app = angular.module('USGDigigram.Admin', []);
app.controller('AdminCtrl', ['DataRESTService', function (DataRESTService) {
    var self = this;
    self.depts = false;
    self.employees = false;
    self.speakap = false;
    self.update = false;
    self.errors = [];

    self.runUpdate = function () {
        resetall();
        self.update = true;
        DataRESTService.runUpdate();
    };

    self.clickDept = function () {
        resetall();
        self.dept = true;
    };

    self.clickEmployees = function () {
        resetall();
        self.employees = true;
    };

    self.clickSpeakap = function () {
        resetall();
        self.speakap = true;
    };

    var resetall = function () {
        self.dept = false;
        self.speakap = false;
        self.employees = false;
        self.update = false;
    };


}]);

app.controller('DeptsCtrl', ['DataRESTService', function (DataRESTService) {
    var self = this;
    self.departments = {};
    self.addDepartment = function () {

    };
}]);

app.controller('EmployeesCtrl', ['DataRESTService', function (DataRESTService) {
    var self = this;
    self.overview = true;
    self.create = false;
    self.employees = {};
    self.createNew = function () {
        self.overview = false;
        self.create = true;
    };
    self.addEmployee = function () {

    };
    self.delete = function ($id) {

    };
    self.edit = function ($id) {

    }
}]);

app.controller('SpeakapCtrl', ['DataRESTService', function (DataRESTService) {
    var self = this;
    self.overview = true;
    self.create = false;
    self.newEmployee = {};
    self.createNew = function () {
        self.overview = false;
        self.create = true;
    };
    self.addSpeakap = function () {
        self.overview = true;
        self.create = false;
        DataRESTService.addSpeakap(self.newEmployee);
    };
    self.delete = function ($id) {
        DataRESTService.deleteSpeakap(self.newEmployee.EID);
    };
    self.edit = function ($id) {

    };

    self.amounts = [{number: 25}, {number: 50}, {number: 100}, {number: 250}];
    self.amount = self.amounts[0];
    self.start = 0;

    self.speakaps = [];
    //self.speakaps = DataRESTService.getSpeakapEntries();
}]);



