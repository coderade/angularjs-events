/**
 *Example of how to use timeout in angular
 *The $timeout service is angular's wrapper for window.setTimeout
 *The return value of calling $timeout is a promise, which will be resolved when the delay
 *has passed and the timeout function, if provided, is executed..
 */
'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {

        //After 3000 miliseconds the $scope.name variable will receive the "Hello!" value.
        var promise = $timeout(function() {
            $scope.name = "Hello!!";
        }, 3000);

        //If the user want, he can cancel the timeout using the cancel method of the timeout service.
        $scope.cancel = function() {
            $timeout.cancel(promise);
        };
    }
);
