/**
 * <--Test of the userData service-->
 * Test created to demonstrate how to create tests for services with dependencies in angularJs
 */

//The service userData depends of the userResource service.
'use strict';
describe('userData', function() {
    //We need to create a variable that will receive the mock userResource service.
    var mockUserResource;

    //beforeEach will be used for reinitializing and setting test values between tests.
    //We need pass the module to load and to bring the module that defines our controller
    beforeEach(module('eventsApp'));

            //So We need to create the mockUserResource
    beforeEach(function () {
        //For create test stubs we'll use the Sinon.JS library
        //Sinon.JS is a standalone unit testing library for JavaScript. It provides spies, stubs and mocks
        //Test stubs are functions (spies) with pre-programmed behavior.

        //The userResource have two functions that we care about for the test that the get() and save() functions
        mockUserResource = sinon.stub({get: function() {}, save: function () {}});

        //After this, we created the mock userResource object... But the userData object when gets contruscted by Angular
        //still going to user the real userResource service that I created in the application and not this mock one.
        //So I need to tell Angular to when the userData service asks for a userResource service to use my mock instead
        //the actual service.
        //A way to do that is to hold the Angular provide object will call our mock service handling the $provide service.


        //The $provide service has a number of methods for registering components with the $injector.
        //Many of these functions are also exposed on angular.Module.

        //the value() method register a value service with the $injector, such as a string, a number, an array,
        //an object or a function. This is short for registering a service where its provider's $get property is a
        //factory function that takes no arguments and returns the value service.
        module(function ($provide) {

        //The value function takes two parameters the name of the service and the value that should be provided
        //when anybody asks for that service.

        //By putting that mockUserResource here I tell to Angular that whenever anybody asks for the userResource
        //service this will be used my mockUserResource object instead
        $provide.value('userResource', mockUserResource);
    });

    });
    /* GET USER TEST */
     describe('getUser', function () {
        //We need to call inject fot get a instance of my userData function
        it('should call getresource.get with the username', inject(function (userData) {

            //So we need to import action in the userData service, we will call the method getUser().
            userData.getUser('valdeci');

            //The userData service internally calls userResource service and if we want to test with parameters
            //that calls the userResource we'll need a mock userResource.
            //So we'll get the first user of our mockUserResource and verify if its username is equals the passed value.
            //mockUserResource.get.returns({userName: 'valdeci'});
            expect(mockUserResource.get.args[0][0]).toEqual({userName: 'valdeci'});
        }));



    //The getUser() function returns the value of the userResource.get function, so we can create a test for this function too.
        it('should return whatever the userResource.get returns', inject(function (userData) {

            //We need to say to the userResource service returns the 'angular rocks' to use in our test.
            mockUserResource.get.returns('angular rocks');

            //We need to create a variable to receive the result the userData.getUser() function.
            //We need to call this method, because the return of this method is userResource.get function
            var result = userData.getUser('valdeci');

            //So we expect tha the result of the return of the userResource.get() is 'angular rocks'
            expect(result).toBe('angular rocks');

        }))
     });

    /*SAVE USER TEST*/
    //The saveUser function is a simple functiont that simply saves the user passed by parameter
    describe('save', function () {

        it('should call userResource.save with the same parameter', inject(function (userData) {
            //So we will call the save function of the userData service with some value passed by parameter
            userData.save('some value');

            //And we expect that call of the method save try to save the passed value.
            expect(mockUserResource.save.calledWith('some value')).toBe(true);
        }))
    })
});
