/**
 * <--Test of the userRsource service-->
 * Test created to demonstrate how to create tests for services that make AJAX calls.
 *
 * The userResource service require the $resource object. The angular's resource object is a wrapper
 * for the $http object and it give us access to the restful services, but ultimately behind scenes
 * it's justing making ajax calls
 *
 * This test will be written to test if a configured my service correctly against the resource object,
 * so whenever we call the get it'll call the correct url
 */

'use strict';

describe('userResource', function() {

    //beforeEach will be used for reinitializing and setting test values between tests.
    //We need pass the module to load and to bring the module that defines the userResource service.
    beforeEach(module('eventsApp'));

    //describe created for the get function's test.
    describe('get', function () {

        //Inside here I need to write a test that verifies whenever I call get(), this actually will be requesting
        //the url that I expect

        //So if a call the get function whit a object that the username is  valdeci, the url that it calls need to be
        // /data/user/valdeci

        //We need to call he inject() function, so I can handle my userResource object
        // $httpBackend ==> Fake HTTP backend implementation suitable for unit testing applications that use the $http service.
        //  The $httpBackend allow us to mockup the $http object. This object will accept any calls to $http object
        //and let me to inspect this calls and determine if they are correct
        it('should issue a GET request to /data/user/valdeci when the username is valdeci', inject(function(userResource, $httpBackend){

            //The way that I can tell the $httpBackend object to respond our call is by calling the when() fucntion
            //The first parameter is the verb and the second parameter is the URL.

            //So we need to call the respond() function and the it to respond with. In this case I want to call a object
            //that has a name property which is the value 'Valdeci Gomes'
            $httpBackend.when('GET', '/data/user/valdeci').respond({name: 'Valdeci'});

            //So we need to call the function that make the call of the above URL.
            var user = userResource.get({userName: 'valdeci'});

            //So we need the httpBackend method flush.
            //The flush method will respond to all requests with the programmed responses. The flush method will
            //also verify there are no outstanding expectations.
            $httpBackend.flush();


            //So we can verify the expectation of the user is corret
            expect(user.name).toBe('Valdeci');

        }))


    })
})