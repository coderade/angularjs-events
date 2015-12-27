/**
 * EventDetails directive
 */
'use strict';

eventsApp.directive('eventDetails',function () {
    return {
        restrict: "E",
        templateUrl: "/templates/directives/eventDetails.html",
        scope: {
            event: '=',
            editable: '=',
            edit: '&'
        }
    }
});
