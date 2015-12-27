/**
 * Directive created for demonstrate how to use jquery plugins plugins inside a angular directive
 */

eventsApp.directive('datePicker', function () {
    return{
        restrict: 'A',
        link: function (scope, element) {
            element.datepicker();
        }
    }
})