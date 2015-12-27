/**
 * Service created to handle the events' requests
 *
 * This service created for provide a interaction support with RESTful services via the $resource service.
 * In this project, We won't use database, so will interact with JSON files.
 * 
 * $resource - A factory which creates a resource object that lets you interact with RESTful server-side data sources.
 */

'use strict';

eventsApp.factory('userResource', ['$resource', function ($resource) {
	//For get the users, we use the resource service passing the path of our json and parameter userName
    var service = $resource('/data/user/:userName', {userName:'@userName'}, { });

    service.queryAll = function (callback) {
        //We'll use the query  retrieve a collection of users
        return service.query({}, callback)
    };

   	//we return the created service to be injected and used to get our users
    return service;
}]);