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
        DataRESTService.runUpdate().then(function (result) {
            self.errors = result.data;
            self.update = true;
        });
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
        DataRESTService.deleteSpeakap($id);
    };
    self.edit = function ($id) {

    };

    self.amounts = [{number: 25}, {number: 50}, {number: 100}, {number: 250}];
    self.amount = self.amounts[0];
    self.start = 0;

    DataRESTService.getSpeakapEntries().then(function (result) {
        self.speakaps = result.data;
    });
}]);

app.controller('DeptCtrl', ['DataRESTService', function (DataRESTService) {
    var self = this;
    self.overview = true;
    self.create = false;
    self.newDept = {dept_id: 0};
    self.createNew = function () {
        self.overview = false;
        self.create = true;
    };
    self.addDept = function () {
        self.create = false;
        self.overview = true;
        DataRESTService.addDept(self.newDept);
    };
    self.amounts = [{number: 25}, {number: 50}, {number: 100}, {number: 250}];
    self.amount = self.amounts[0];
    self.start = 0;

    self.depts = [];
    DataRESTService.getAllDepts().then(function (result) {
        self.depts = result.data;
    });
    self.delete = function ($id) {
        DataRESTService.deleteDept($id);
    };
}]);

app.controller('EmployeeCtrl', ['DataRESTService', function (DataRESTService) {
    var self = this;
    self.overview = true;
    self.create = false;
    self.newEmployee = {};
    self.createNew = function () {
        self.overview = false;
        self.create = true;
    };
    self.addEmployee = function () {
        self.create = false;
        self.overview = true;
        DataRESTService.addEmployee(self.newEmployee);
    };
    self.amounts = [{number: 25}, {number: 50}, {number: 100}, {number: 250}];
    self.amount = self.amounts[0];
    self.start = 0;

    DataRESTService.getAllEmployees().then(function (result) {
        self.employees = result.data;
    });

    self.delete = function ($id) {
        DataRESTService.deleteEmployee($id);
    };
    self.edit = function ($id) {

    }
}]);


