var model = {
    user: "LG",
    tasks: [

    { name: "workout", duedate: "06/03/2017", description: "10 push ups", checked: false },
    { name: "run", duedate: "08/03/2017", description: "3000m", checked: false }
    ]
};

var taskListApp = angular.module("taskListApp", []);

taskListApp.controller("taskListCtrl", function ($scope) {
    $scope.data = model;

    $scope.addNewTask = function () {
        $scope.data.tasks.push({
            name: $scope.taskName,
            duedate: $scope.DATE,
            description: $scope.DESCRIPTION,
            ckecked: false
        });

        $scope.taskName = "";
        $scope.DATE = "";
        $scope.DESCRIPTION = "";
    }

    $scope.showText = function (checked) {
        return checked ? "YES" : "NO";
    }

    $scope.setStyle = function (checked) {
        return checked ? "color: green" : "color:red; font-weight: bold";
    }
});