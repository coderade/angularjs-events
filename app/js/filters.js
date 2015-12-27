/**
 *Filter created for demonstrate the use of dynamic filters (created by the developer) in AngularJS
 */

'use strict';
eventsApp.filter('durations', function() {
    return function(duration) {
        switch (duration) {
            case 1:
                return "Half Hour";
            case 2:
                return "1 Hour";
            case 3:
                return "Half Day";
            case 4:
                return "Full Day";
        }
    }
});