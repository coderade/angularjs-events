/**
 * Controller created for demonstrate the use of Cookies service in AngularJS, for use this you need call
 * the ngCookies provider in the principal file of the application (app.js)
 */


'use strict';

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {
        $scope.event = {id: 1, name:"My Event"};

        //method to put a event in the cookie
        $scope.saveEventToCookie = function(event) {
            $cookieStore.put('event', event);
        };

        //method to get a event saved in the cookie
        $scope.getEventFromCookie = function() {
            console.log($cookieStore.get('event'));
        };

        //method to remove a event in the cookie
        $scope.removeEventCookie = function() {
            $cookieStore.remove('event');
        };


    }
);
