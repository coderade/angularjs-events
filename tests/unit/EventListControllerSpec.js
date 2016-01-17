/**
 * <--Test of the EventListController-->
 * Test created to demosntrate how to test controllers in angularJS using Karma and the libaries Jasmine.JS and Sinon.JS,
 * all the code is commented for a better understanding.
 */

'use strict';
//A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
//The string is a name or title for a spec suite – usually what is being tested. The function is a block of code that
// implements the suite.
describe('EventListController', function() {
    var scope, $controllerConstructor, mockEventData;

    //beforeEach will be used for reinitializing and setting test values between tests.
    //We need pass the module to load and to bring the module that defines our controller
    beforeEach(module("eventsApp"));

    //inject is a angular global function used to ask angular to give angular objects
    beforeEach(inject(function($controller, $rootScope) {
        //The $rootScope object can be used for create other scopes from it.
        scope = $rootScope.$new();


        //For create test stubs we'll use the Sinon.JS library
        //Sinon.JS is a standalone unit testing library for JavaScript. It provides spies, stubs and mocks
        //Test stubs are functions (spies) with pre-programmed behavior.
        mockEventData = sinon.stub({getAllEvents: function() {}});

        //Using the injected parameter controller we can create a controller using the variable controllerConstructor
        $controllerConstructor = $controller;
    }));

    /* GET ALL EVENTS TEST */
    it('should set the scope events to the result of eventData.getAllEvents', function() {

        //Fake eventData object that will receive the value of the getAllEvents function
        var mockEvents = {};

        //We need to say to getAllEvents to return the mockEvents object whenever it be called, if we don't make the
        //result of mockEventData.getAllEvents will be undefined
        mockEventData.getAllEvents.returns(mockEvents);

        //We can create the controller using the controller constructor
        var ctrl = $controllerConstructor("EventListController",
            {$scope: scope, $location: {}, eventData: mockEventData});

        //The scope need to be equals the value of mockEvents
        //The expect method is what the result that we expect for our test
        expect(scope.events).toBe(mockEvents);
    })

    /* NAVIGATE TO DETAILS TEST */
    it('should navigate to the correct url when navigateDetails is called', function () {

        //we create the mockLocation variable using url function
        var mockLocation = sinon.stub({url: function () {}});

        var ctrl = $controllerConstructor("EventListController",
            //we need set $location parameter using the mockLocation value
            {$scope: scope, $location: mockLocation, eventData: mockEventData});

        //We need create a event to use in your test
        var event = {id: 1};

        scope.navigateToDetails(event);

        //we create the mockLocation object to call the url function to verify if that the parameter was passed to check
        //if the url is passed with especific value
        expect(mockLocation.url.calledWith('/event/1')).toBe(true);
    })
})