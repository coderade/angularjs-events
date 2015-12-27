/**
 * Event Thumbnail directive.
 */
'use strict';
eventsApp.directive('eventThumbnail', function(){
    return{
        restrict: 'E',
        replace: true, //Using replace in our directive  the content of the directive template will replace the element
                    // that the directive is declared on, in this case all the div events
        templateUrl: 'templates/directives/eventThumbnail.html',
        scope: {
            event: "=",
            showDetails: '&'
        }
    }
});