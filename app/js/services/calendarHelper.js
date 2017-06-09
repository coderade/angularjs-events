/**
 * Service created to be used in our date-picker directive
 */


eventsApp.factory('calendarHelper', function () {
    //Month names
    var monthNames = [ "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December" ];

    return {
        //Method to increment the calendar month
        incrementCalendarMonth: function(calendar) {
            //If the month is equal to 11 we need increment the year and set the month o zero for start a new year
            if (calendar.month === 11) {
                calendar.month = 0;
                calendar.year++;
            } else {
                //otherwise we can increment the month normally
                calendar.month++;
            }
        },

        //Method to increment the calendar month
        decrementCalendarMonth: function(calendar) {

            //If the month is equal to 0 we need decrement the year and set the month o 11 to go back one year
            if (calendar.month === 0) {
                calendar.month = 11;
                calendar.year--;
            } else {
                //otherwise we can increment the month normally
                calendar.month--;
            }
        },

        //Method to get the days of the calendar
        getCalendarDays: function (year, month) {

            //First we need to create a variable with the value of our month's start date
            //This variable will be created with a new Date object that will receive the passed year and month and the
            //day 1
            var monthStartDate = new Date(year, month, 1);

            //So we need to create a array of days for use to build the calendar
            var days = [];

            //The getDay() method of the Date object returns the day of the week (from 0-6) Sunday is 0, Monday is 1, and so on.

            //While the idw value is less the monthStartDate.getDay() a empty string '' will be added to the array creating
            //something like this: ["", "", "", "", "", 1], so the month will be started in sixth day of the week: friday
            for (var idw = 0; idw < monthStartDate.getDay(); idw++) {
                days.push('');
            }

            //The getDate() method of the Date object returns the day of the month(from 0-28|29|30|31|)
            //While the idm value is less or equal the value of the Date.getMethod + 1 the value of the idm will be added
            //in the days array.
            for (var idm = 1; idm <= new Date(year, month+1, 0).getDate(); idm++) {
                days.push(idm);
            }
            return days;
        },

        //Method to get month name
        getMonthName: function(monthNumber) {
            //Return the name of the month at index passed as parameter
            return monthNames[monthNumber];
        }
    }
});