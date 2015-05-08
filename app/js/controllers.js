'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [function () {

    }])
    .controller('MyCtrl2', [function () {

    }]);

angular.module('mySecondApp.controllers', []).controller('FinanceController', function ($scope) {
    $scope.salary = 5;
    $scope.percentage = 0.5;
    $scope.result = function () {
        return $scope.salary * $scope.percentage * 0.01;
    }
});