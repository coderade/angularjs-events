/**
 *Directive created to demonstrate how to create a datepicker similar to that of bootstrap.
 */

'use strict';

eventsApp.directive('datePicker', function () {
    return {
        restrict: "E",
        templateUrl: "/templates/directives/datepicker.html",
        controller: function($scope, calendarHelper) {

            //We need to set the showDatePicker value to false for default.
            //So we can customize when the datePicker will be appear.
            $scope.showDatePicker = false;

            //We need create a scope object calendar to receive the year, the month and month name.
            $scope.calendar = {

                //To get the values of the year and month, we create a new Date object and use their respective methods
                year: new Date().getFullYear(),
                month: new Date().getMonth(),

                //To get the name of the month we'll to use the created calendarHelper service
                monthName: calendarHelper.getMonthName(new Date().getMonth())
            };

            //We need to create a scope object days to receive all the days of the month.
            //To make, we can call the method getCalendarDays of the calendarHelper service and pass the year and month
            //as parameters.
            $scope.days = calendarHelper.getCalendarDays(new Date().getFullYear(), new Date().getMonth());


            //Method to get the next month
            $scope.nextMonth = function () {
                //To get the next month we can call the created method incrementCalendarMonth of the calendarHelper
                //service and your respective methods to get name of the month and the days
                calendarHelper.incrementCalendarMonth($scope.calendar);
                $scope.calendar.monthName = calendarHelper.getMonthName($scope.calendar.month);
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year, $scope.calendar.month);
            }

            //Method to get the previous month
            $scope.previousMonth = function () {
                calendarHelper.decrementCalendarMonth($scope.calendar);
                $scope.calendar.monthName = calendarHelper.getMonthName($scope.calendar.month);
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year, $scope.calendar.month);
            }

            //Method to get the next year
            $scope.nextYear = function () {
                $scope.calendar.year++;
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year, $scope.calendar.month);
            }

            //Method to get the previous year
            $scope.previousYear = function () {
                $scope.calendar.year--;
                $scope.days = calendarHelper.getCalendarDays($scope.calendar.year, $scope.calendar.month);
            }


            //Method ro return the selected date by the user
            $scope.selectDate = function (day) {

                //Set and format to the current element the value of the selected month, date e year selected.
                $scope.element.val(($scope.calendar.month + 1) + "/" + day + "/" + + $scope.calendar.year);

                //Hide the datepicker.
                $scope.showDatePicker = false;
            }

        },

        //The link function is responsible for registering DOM listeners as well as updating the DOM. It is
        //executed after the template has been cloned. This is where most of the directive logic will be
        //put.

        link: function(scope, element, attrs, controller) {
            //We need to create a variable that will receive which element will receive our datepicker
            var forElement = angular.element("#" + attrs.for);

            //So we can set this element for the scope object element.
            scope.element = forElement;

            //$scope.$apply() takes a function or an Angular expression string, and executes it,
            //then calls $scope.$digest() to update any bindings or watchers.


            //When this element is focused, we need use the scope's method $apply to change our view and show the datepicker
            forElement.on('focus', function() { scope.$apply(function() { scope.showDatePicker = true;});  });

            //When the user clicks outside of the element/inside the body we need use again the scope's method $apply to
            //change our view but now to hide the datepicker
            angular.element("body").on('click', function() { scope.$apply( function() { scope.showDatePicker = false; }) });

            //The event.stopPropagation() method stops the bubbling of an event to parent elements,
            // preventing any parent event handlers from being executed.

            //We need to use the Jquery method stopPropagation() for when someone clicks on the element only the click handler of the element is called
            forElement.on('click', function(event) { event.stopPropagation();  });

            //We need to make the same with the calendar-nav element to keep datepicker open
            angular.element(".calendar-nav").on('click', function(event) { event.stopPropagation(); } );
        }
    };
});
