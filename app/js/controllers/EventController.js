/**
 * Controller created to use as controller of the events of the site.
 */

'use strict';

eventsApp.controller('EventController',
    function EventController($scope, $routeParams, userData, $location, authService, eventData) {

        //First we need to get the event using the method getEvent of our eventData service, and set this event to
        //$scope.event object.
        $scope.event = eventData.getEvent($routeParams.eventId);

        //We need default the default sortOrder method of the artist
        $scope.sortorder = 'name';

        //Method to edit a event
        $scope.editEvent = function (event) {
            //if the method is called, we redirect for the chosen event's edit page.
            $location.url('/events/edit/' + event.id);
        };

        //Method to edit a artist of the event
        $scope.editArtist = function (artist) {

            //if the method is called, we redirect for the chosen artist's edit page.
            $location.url('/events/' + $scope.event.id+ '/artists/edit/' + artist.id);
        };

        //Method to create a artist of the event
        $scope.createNewArtist = function (eventId) {

            //if the method is called, we redirect for the Create new artist page of the event.
            $location.url("/events/" + eventId + "/artists/new");
        };

        //To verify if the user can edit the event, we need to verify if your username is equals the name of the creator of the event.
        //For do this we need to compare using the getCurrentUserName method of our authentication service with the $scope.event.creator 
        //if this two values are equals the comparison will to return true. 
        $scope.allowUserToEditEvent = function () {
            return authService.getCurrentUserName() === $scope.event.creator;
        };

        //To verify if the user can edit the artist, we need to verify if your username is equals the name of the creator of the artist.
        //For do this we need to compare using the getCurrentUserName method of our authentication service with the artist.creator 
        //if this two values are equals the comparison will to return true. 
        $scope.allowUserToEditArtist = function (artist) {
            return authService.getCurrentUserName() === artist.creator;
        };


        $scope.getArtistCreatorName = function (userName) {
            //If the username is null or undefined will return "".
            if (!userName) {
                return "";
            }

            //underscore findWhere method ==> Looks through the list and returns the first value that matches all of the
            //key-value pairs listed in properties.


            //We need to use the _.findWhere method for search for the correct user that matches userName of the 
            //user that we are passing as parameter. 
            return _.findWhere(userData.users, {userName:userName}).name;
        };


        //Method to upvote a artist 
        $scope.upVoteArtist = function(artist) {

            //If the user is not authenticated we need redirect him for the login's page.
            //For do this we need call the isAuthenticated method of our authentication service.
            if (!authService.isAuthenticated()) {
                $location.url('/login');
            }

            //If everything is ok we can upvote the artist
            artist.upVoteCount++;
        };

        //Method to upvote a artist
        $scope.downVoteArtist = function(artist) {

            //If the user is not authenticated we need redirect him for the login's page.
            //For do this we need call the isAuthenticated method of our authentication service.
            if (!authService.isAuthenticated()) {
                $location.url('/login');
            }
            //If everything is ok we can downvote the artist
            artist.upVoteCount--;
        };
    }
);