/**
 * Controller created for demonstrate the use of Cache service in AngularJS, 
 * for use this, click in 'Using cache in Angular' example
 */

'use strict';
eventsApp.controller('CacheSampleController',
	function CacheSampleController($scope, myCache) {

        //Method to add a value in the cache
        $scope.addToCache = function(key, value) {
            myCache.put(key, value);
        };

        ///Method to get a value in the cache
        $scope.readFromCache = function(key) {
            return myCache.get(key);
        };

        //Method to return the info of the cache
        $scope.getCacheStats = function() {
            return myCache.info();
        };		
	}
);