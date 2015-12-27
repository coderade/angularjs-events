/**
 * <--Test of the filters #filter.js#->
 * Test created to demonstrate how to test dynamic filters (created by the developer) in AngularJS
 *
 * This test will verifies whenever I pass the number 1 in the durations filter it returns the string 'Half hour'
 */

'use strict';

describe('durations', function () {

    //beforeEach() will be used for reinitializing and setting test values between tests.
    //We need pass the module to load and to bring the module that defines the durations filter.
    beforeEach(module('eventsApp'));

    //So I need to call the inject function to return in order to get my filter,
    //Like in the FilterSampleController the parameter that I pass need to have the sufix filter
    //(durations: name of the filter + suffix filter = durationFilter)
    it('should return "Half Hour" when give a 1', inject(function(durationsFilter){

        //So we expect that whenever I pass the parameter 1 the result is equals the string "Half Hour".
        expect(durationsFilter(1)).toEqual('Half Hour');
    }) )
});