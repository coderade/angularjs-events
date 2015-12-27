/**
 * Service created to handle the project authentication
 */

'use strict';

eventsApp.factory('authService', function () {
    //we created a empty object for receive the value of the current user of the system
    var currentUser = {};

    //We created a method to clone the value of the passed user to other object using the JSON methods parse and stringy,
    //this method will be used to get and set the current user logged in the system
    function cloneObject(object) {
        //JSON.parse() ==> method parses a string as JSON, optionally transforming the value produced by parsing
        //JSON.stringify() ==> method converts a JavaScript value to a JSON string

        //First we convert the value of a object to a JSON string and after this we parse this string to a object
        return JSON.parse(JSON.stringify(object));

    }

    return {
        //Method to get the username of the current user logged in the system
        getCurrentUserName:function () {
            return currentUser.userName
        },

        //Method to get the current user in the system
        getCurrentUser:function () {
            //We will use the created cloneObject to get the currentUser logged
            return cloneObject(currentUser);
        },

        //Method to set the current user in the system
        setCurrentUser:function (user) {
            //We will use the created cloneObject to get the currentUser logged
            currentUser = cloneObject(user);
        },

        //Method to check if the user is logged in
        isAuthenticated:function() {
            //The !!(not not) operator coerces oObject to boolean. If it was falsey (e.g. 0, null, undefined, etc.),
            // it will be false, otherwise, true.

            //Return true if the currentUser is not null, undefined and the currentUser.username is not null, undefined too.
            return !!currentUser && !!currentUser.userName;
        },

        ////Method to check if the user can edit a event
        userCanEditEvent: function(event) {
            //Return if the username of the current user is equals the name of the username of event creator.
            return this.getCurrentUserName() == event.creator;
        }

    };
})