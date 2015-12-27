/**
 * Controller created to use to demonstrate the use of custom filters in angular for understand more about this 
 * please learn: https://docs.angularjs.org/guide/filter.
 * Also look the filters.js for a better understanding.
 */
'use strict';

eventsApp.controller('FilterSampleController',
	//For call a custom filter we need pass the name of the filter followed by Filter world, if we don't make this
	//we won't call the filter.
	
    function FilterSampleController($scope, durationsFilter ) {
        $scope.data = {};
        $scope.data.duration1 = durationsFilter(1);
        $scope.data.duration2 = durationsFilter(2);
        $scope.data.duration3 = durationsFilter(3);
        $scope.data.duration4 = durationsFilter(4);

    }
);
