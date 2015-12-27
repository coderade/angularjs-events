/**
 * Service created to handle the user's data
 * As it was not used a database in this project, The user data will be received via JSON files.
 */
'use strict';

eventsApp.factory('userData', ['userResource', function (userResource) {
    //debugger;
    return {
        //Method to get a particular user
        //This method will receive as parameter the username of the user and a especified callback function.
        getUser:function(userName, callback) {

            //To get an user we'll use the method get() of the $resource service passing as parameter the username of the
            //user and a especified callback function.
            return userResource.get({userName:userName}, function (user) {
                if (callback)
                    callback(user);
            });
        },

        //Method created to save the users
        save:function(user) {

            //To save we need to use the $resource.save method.
            userResource.save(user);
        }
        //users:function () {
        //    return userResource.queryAll(function(users) {
        //        return users;
        //    });
        //}
    };
}]);