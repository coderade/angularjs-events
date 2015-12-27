/**
 * Simple controller created to view the profile of the user
 */
'use strict';

eventsApp.controller('ViewProfileController',
    function ViewProfileController($scope, $routeParams, userData) {

        //We just need call the method getUser of our userData service, passing the username
        //as parameter. For make this we can user the routeparams service for retrieve the route parameter
        //username.
        $scope.user = userData.getUser($routeParams.userName);
    }
);
