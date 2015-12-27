/**
 * Controller created to use for edit and create artists in the project
 */
'use strict';

eventsApp.controller('EditArtistController',
    function EditArtistController($scope, eventData, $routeParams, $location, authService) {
        if (!authService.isAuthenticated()) {
            $location.url('/login');
            return;
        }

        //If the url contains the value /artists/edit we return true for editingArtist, it is a little kludge(haha)
        //for verify if a object has a index, if it has it will  return a value equal ou greatter than zero, if don't
        //it will return -1
        $scope.editingArtist = $location.$$url.indexOf('/artists/edit') > -1;

        //We need to create a scope object artist that will receive the value of current artist
        $scope.artist = {};

        //if it's a new artist we'll set the duration to 1, half hour
        if(!$scope.editingArtist) {
            $scope.artist.duration = "1";
        }

        //We need add the artist for the event, for do this we need first use the getEvent() method for get currentEvent
        //passing the id of the event using the $routeParams to get id the current event and the callback method
        //setArtist() that will set the artist for this event

        //The $routeParams service allows you to retrieve the current set of route parameters.
        $scope.event = eventData.getEvent($routeParams.eventId, setArtist);


        //Method to save the artist
        $scope.saveArtist = function (artist, form) {

            //If the form is invalid, we don't continue the record
            if (!form.$valid) return;

            //otherwise we need save the values

            //For the artist's creator username we will set the username of the current user. Using the method
            //getCurrentUserName() of our authentication service.
            artist.creator = authService.getCurrentUserName();

            //And for the name of the creator of the artist we will the get the name of the current user logged using
            //the getCurrentUser() method of our authentication service.
            artist.creatorName = authService.getCurrentUser().name;

            //For the duration of the artist show the parse the value of the string duration to int
            artist.duration = parseInt(artist.duration);

            //If we're not editing an artist we need create a new
            if (!$scope.editingArtist) {

                //The id of this artist will be the id of the last artist + 1, for do this we'll use the getNextArtistId()
                //of the our eventData service.
                artist.id = eventData.getNextArtistId($scope.event);

                //The vote's count will start with 0
                artist.upVoteCount = 0;

                //And we add the artist for the array of artists of the current event.S
                $scope.event.artists.push(artist);
            }

            //We can save the event now, usinf the method save() of our eventData service
            eventData.save($scope.event);

            //And after save we need redirect the user for the current event page.
            $location.url('/event/' + $routeParams.eventId);
        }

        //If we are editing a artist, we need edit get current artist and set values for him.
        function setArtist(event) {

            //underscore findWhere method ==> Looks through the list and returns the first value that matches all of the
            //key-value pairs listed in properties.

            if($scope.editingArtist) {
                //We need to use the _.findWhere method for search for the correct artist that matches the id of the
                //artist that we are currently editing.
                $scope.artist = _.findWhere(event.artists, {id:parseInt($routeParams.artistId)});
            }
        }
    }
);