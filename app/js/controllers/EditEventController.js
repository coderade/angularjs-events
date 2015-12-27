/**
 * Controller created to use for edit and create events in the project
 */

'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData, $location, $routeParams, authService, $timeout) {
        //We need to verify if the user is authenticated for create or edit a event If he isn't authenticated,
        //we need to redirect him to the login page. We'll use the isAuthenticated method of our authentication service.
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }

        //We need to create a scope object event that will receive the value of the event
        $scope.event = {};


        //We need set the value of showDatePicker to false, for it dont appears a
        $scope.showDatePicker = false;

        //If the url contains the value /events/edit we return true for editingEvent, it is a little kludge(haha)
        //for verify if a object has a index, if it has it will return a value equal ou greatter than zero, if don't
        //it will return -1
        $scope.editingEvent = $location.$$url.indexOf('/events/edit') > -1;

        //If the user is editing the event, we need get the current event that is being edited and call the
        //created callback function setEventOrRedirectIfNotAuthorized.
        if ($scope.editingEvent) {
            eventData.getEvent($routeParams.eventId, setEventOrRedirectIfNotAuthorized);
        }

        //Method to save the event
        $scope.saveEvent = function (event, form) {
            //If the form is invalid, we don't continue the record
            if (!form.$valid) return;

            //otherwise, we can save it, for make this we need to call the save method of our eventData service.
            //and call the callback function to redirect it for your event page.
            eventData.save(event, function() { $location.url('/event/' + event.id); });
        };

        //Method to cancel the event.
        //If the user cancels the edit, we redirect it for the events page.
        $scope.cancelEdit = function () {
            $location.url("/events");
        };

        //We can change the angular directives ng-focus and ng-blur.

        //ng-focus directive= The ng-focus event occurs fires when an element gets focus.
        //When our date input get focus we need show our datePicker
        $scope.dateFocus = function() {
            $scope.showDatePicker = true;
        }

        //ng-blur directive= Specify custom behavior on blur event. A blur event fires when an element has lost focus.
        //When our element lose its focus, we need hide our datePick with a timeout of 200 mls.
        $scope.dateBlur = function() {
            $timeout(function() {$scope.showDatePicker = false; }, 200);
        }

        //Method to get date value of the datepicker.
        $scope.setDateFromPicker = function(date) {
            $scope.event.date = date;
            $scope.showDatePicker = false;
        }

        //function created for set the event if the user can edit the event or redirect it otherwise for the login's page.
        function setEventOrRedirectIfNotAuthorized(event)  {

            //If the user is the event's creator, we set the event for the scope.
            if (authService.userCanEditEvent(event)) {
                $scope.event = event;
            }
            //else we need to redirect it for the login's page.
            else {
                $location.url('/login');
            }
        }
    }
);