/**
 * Directive created to demonstrate how to get focus for a html element using directives in Angular
 */
'use strict';

eventsApp.directive('focus', function () {
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            angular.element(element).focus();
        }
    };
});
