/**
 * Controller created to allow the profile editing
 *
 * The $location service parses the URL in the browser address bar (based on the window.location)
 * and makes the URL available to your application.
 */

'use strict';

eventsApp.controller('EditProfileController',
    //we created a function that will inject the $scope for change the model of our application,
    //the $location what allows to change the url of our application,
    //the created service userData that'll get data of the user and
    //the created service authService that'll be used to autenticate our system
    function EditProfileController($scope, $location, userData, authService) {

        //We new to create a scope object user that will receive the value of thecurrent user
        $scope.user = {};

        //We need use the $watch service that will be watching the changes in our object de return of the method
        //authService.getCurrentUserName()

        //The $scope.watch() function creates a watch of some variable. This method receive with parameters
        //two functions as parameters: a value function and listener function.

        //The value function should return the value which is being watched. AngularJS can then check the value returned
        //against the value the watch function returned the last time. That way AngularJS can determine
        //if the value has changed.
        //The listener function should do whatever it needs to do if the value has changed.

        $scope.$watch(function () {
            //Our value function will return the currentUserName of our authentication service.
            return authService.getCurrentUserName();
        }, function () {
            //Our listener function will return the current user if the value of our function
            //authService.getCurrentUserName(); changes.
            $scope.user = authService.getCurrentUser();
        });

        //We need to call the method isAuthenticated of our authentication service to verify if our user is autenticated.
        $scope.isAuthenticated = function () {
            return authService.isAuthenticated();
        };

        //The method to save the user
        $scope.registerUser = function (user, form) {

            //If the form is invalid, we don't continue the record
            if (!form.$valid) {
                return;
            }

            //else we save the user
            userData.save(user);

            //and we setting the created user as current user
            authService.setCurrentUser(user);

            //and redirect the page for the view profile of the user.
            $location.url('/viewProfile/' + user.userName);
        };

        //Method to update the profile
        $scope.updateProfile = function (user, form) {
            //If the form is invalid, we don't continue the record
            if (!form.$valid) {
                return;
            }

            //else we update the user
            userData.save(user);

            //and we setting the created user as current user
            authService.setCurrentUser(user);

            //and redirect the page for the view profile of the user.
            $location.url('/viewProfile/' + user.userName);
        };
    }
);
