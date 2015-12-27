/**
 * Service created to handle the events' requests
 */
'use strict';

eventsApp.factory('eventResource', ['$resource', function ($resource) {
    var service = $resource('/data/event/:id', {id:'@id'});

    //The method queryAll will get all events of the project.

    //To do this we need to use the method query() of the $resource service.
    //This method do the same that the get() method, but it sets the isArray true, so we will receive a array of events

    //The default set of resource actions of the $resource service:
    //{ 'get':    {method:'GET'},
    //    'save':   {method:'POST'},
    //    'query':  {method:'GET', isArray:true},
    //    'remove': {method:'DELETE'},
    //    'delete': {method:'DELETE'} };

    service.queryAll = function (cb) {
        return service.query({}, cb)
    };

    return service;
}]);