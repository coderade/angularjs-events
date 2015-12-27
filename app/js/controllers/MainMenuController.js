/**
 * Controller created
 */
'use strict';

eventsApp.controller('MainMenuController',
    function MainMenuController($scope, authService) {

        //We need create empty scope object user to receive the value of the currentUser
        $scope.user = {};

        //We need to use the watch function to verify of the username changed.

        //The $scope.watch() function creates a watch of some variable. This method receive with parameters
        //two functions as parameters: a value function and listener function.

        //The value function should return the value which is being watched. AngularJS can then check the value returned
        //against the value the watch function returned the last time. That way AngularJS can determine
        //if the value has changed.

        $scope.$watch(authService.getCurrentUserName, function () {

            //If the value of the getCurrentUsername the callback function will return the current user to the
            //$scope object user.
            $scope.user = authService.getCurrentUser();
        });

        //Method to verify if the use is authenticated,
        //For do this we just need call the isAuthenticated method of the authentication service
        $scope.isAuthenticated = function () {
            return authService.isAuthenticated();
        };

        //Method to logout of the system
        $scope.logout = function () {

            //If the user logout we need to set a value object to the current user using the setCurrentUser
            //of our authentication service.
            authService.setCurrentUser({});
        };
    }
);