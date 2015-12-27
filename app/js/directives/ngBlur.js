/**
 *Directive created to demonstrate how to handle a event after the trigger of the blur event of a element
 *
 * The blur event is sent to an element when it loses focus.
 */

'use strict';


eventsApp.directive('ngBlur', function ($parse) {
    return  function (scope, element, attrs) {

        //We need to use the $parse method to convert a Angular expression into a function.
        var fn = $parse(attrs.ngBlur);

        //on the blur of the element we'll call the  specified function
        element.bind('blur', function (event) {

            //Angular only monitors variables used in expressions and anything inside of a $watch living inside the $scope.
            //So if we are changing the model outside of the Angular context you will need then to call $scope.$apply()
            //or those changes to be propagated, otherwise Angular will not know that they have been changed thus
            //the binding will not be updated.

            scope.$apply(function () {
                fn(scope, {$event: event});
            });
        });

    };
});

