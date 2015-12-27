/**
 *Example created for demonstrate how to use the $locale service in angular
 *
 *$locale service provides localization rules for various Angular components
 *
 *For use this example, we need to add the angular_locale in your lib, in this example I using the spanish locale.
 */
'use strict';

eventsApp.controller('LocaleSampleController',
    function LocaleSampleController($scope, $locale) {
        console.log($locale);

        //We need to create and to set it the current date
        $scope.myDate = Date.now();

        //So we can create a format, using the DATETIME_FORMATS property of the locale service.
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

        //throw { message: 'error message' };

    }
);