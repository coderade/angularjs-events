/**
 * Directive create for the artistThumbnail.
 * For a better understanding look the artistThumbnail template.
 */
'use strict';

eventsApp.directive('artistThumbnail',function () {
    return {
        restrict: "E",
        templateUrl: "/templates/directives/artistThumbnail.html",
        scope: {
            artist: '=',
            editable: '=',
            edit: '&'
        }
    }
});