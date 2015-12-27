/**
 * Service created to be used as exception handler, at the time this directive is not being used, but the code was
 * to study purpose
 */
'use strict';

eventsApp.factory('$exceptionHandler', function() {
    return function (exception) {
        console.log("exception handled: " + exception.message);
    };
});
