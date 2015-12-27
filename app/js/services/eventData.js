/**
 * Service created to handle the event's data
 * As it was not used a database in this project, The event data will be received via JSON files.
 */
'use strict';


eventsApp.factory('eventData', function (eventResource, authService) {
    return {

        //Method to get a particular event
        //This method will receive as parameter the id of the event and a especified callback function.
        getEvent: function(eventId, callback) {

            //To get an event we'll use the method get() of the $resource service passing as parameter the id of the
            //event and a especified callback function.
            return eventResource.get({id:eventId}, function(event) {
                if (callback)
                    callback(event);
            });
        },

        //Method to get all events
        getAllEvents: function(callback) {
            //For a better understanding of how this method works look at the eventResource's service .
            return eventResource.queryAll(callback);
        },

        //Method created  to set the id of the artist that will be created,
        //The id of the artist must be greater than the ID of the artists already created.
        getNextArtistId:function (event) {
            var max = 0;
            for (var idx = 0; idx < event.artists.length; idx++) {

                //If the id of the artist is greatter than the value of max, the max value'll receive the value of the
                //current artist's id.
                //By doing this, we always ensure that the value of the artist's Id will always be the value of the greatest
                //artist's Id
                if (event.artists[idx].id > max) {
                    max = event.artists[idx].id;
                }
            }
            //This method will return the greater artist's ID +1
            return max+1;
        },


        //Method created to save the events
        save: function(event, callback) {
            //If the event already exists, we can save it normally
            if (event.id) {
                //We need to use the method save() of the $resource service.
                eventResource.save(event, function() { if (callback) callback(); });
            } else { //Otherwise we need to crate other event.
                eventResource.queryAll(function(events) {
                    //Setting the event creator using the username of the current logged user
                    event.creator = authService.getCurrentUserName();
                    //The event's id using the getNextEventId method
                    event.id = getNextEventId(events);
                    //The event's artists suing a empty
                    event.artists = [];
                    //and save using $resource.save method.
                    eventResource.save(event);
                    if (callback)
                        callback();
                });
            }
        }
    };

    //Method created  to set the id of the event that will be created,
    //The id of the event must be greater than the ID of the events already created.
    function getNextEventId(events) {
        var max = 0;
        for (var idx = 0; idx < events.length; idx++) {

            //If the id of the event is greatter than the value of max, the max value'll receive the value of the
            //current event's id.
            //By doing this, we always ensure that the value of the event's Id will always be the value of the greatest
            //event's Id
            if (events[idx].id > max) {
                max = events[idx].id;
            }
        }
        //This method will return the greater event's ID +1
        return max+1;
    }
});