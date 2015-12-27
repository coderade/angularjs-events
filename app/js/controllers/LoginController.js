/**
 * Controller created to be used to manage the login system of the project.
 */
'use strict';

eventsApp.controller('LoginController',
    function LoginController($scope, $location, userData, authService) {

        //First we need to create a empty user object with the values userName and password receiving a
        //string without value
        $scope.user = {userName:"", password:""};

        //Method to login
        $scope.login = function () {

            //For get the user we need use the getUser method of the userData service passing the username
            //and the callback method to handle the login verification
            userData.getUser($scope.user.userName, function (user) {

                //if the user is not null/undefined and the passed password is equal the password of the got user
                if (!!user && user.password === $scope.user.password) {

                    //We can set the currentUser logged in the system using the authentication service
                    authService.setCurrentUser(user);

                    //And redirect the user for the events page.
                    $location.url('/events');
                }
            });
        };
    }
);