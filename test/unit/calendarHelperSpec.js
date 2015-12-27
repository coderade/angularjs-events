/**
 * <--Test of the CalendarHelper service-->
 * Test created to demonstrate how to create tests for services without dependencies in angularJs
 */

 //I tested this service because it has no dependencies, so we don't need worry about movking anything

describe('calendarHelper', function() {

    //we need call the module parent of our calendarHelper service
    beforeEach(module('eventsApp'));

    //With the inject function that will give the controller, constructor and rootScope,

    //inject() is the way to ask angular to give your services, so to test the services we use inject to get
    //the service that we want to test.
    it('should return August when give a seven', inject(function (calendarHelper) {
        expect(calendarHelper.getMonthName(7)).toBe('August');
    }))
})
