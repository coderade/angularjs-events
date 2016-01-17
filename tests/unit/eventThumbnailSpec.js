/**
 * <--Test of the directive #eventThumbnail->
 * Test created to demonstrate how to test directives in AngularJS
 *
 * This test verifies if the directive is rendering correctly
 *
 * Data-binding in Angular apps is the automatic synchronization of data between the model and view components.
 * The way that Angular implements data-binding lets you treat the model as the single-source-of-truth in your application.
 * The view is a projection of the model at all times. When the model changes, the view reflects the change, and vice versa.
 */

'use strict';

describe('eventThumbnail', function () {
    var el, stubShowDetails;

    beforeEach(module('eventsApp'));

    beforeEach(module('templates/directives/eventThumbnail.html'));

    //This function will be seted to create and run the directive
    beforeEach(inject(function ($compile, $rootScope) {

        //SO WE NEED TO CONFIGURE THE SCOPE
        var scope = $rootScope;

        //If we look in the eventThumbnail template, all the binding  is being done on the event object
        //So we need to create a event object and put some data in it
        scope.event = {
            name: 'Event Name',
            date: '000',
            time: '000',
            location: {
                address: 'my address',
                city: 'my city',
                country: 'Brazil',
                province: 'Parana'
            }
        };

        //We need to create a stub to simulate the showDetails method of the eventThumbnail directive
        stubShowDetails = sinon.stub();

        //We we call the myShowDetails() method in the show-details directive, so we need to pass the created stub method
        //stubShowDetails to this method
        scope.myShowDetails = stubShowDetails;


        //AND CREATE A COMPILE THE DIRECTIVE

        //the angular.element() in only a wrapper over Jquery
        el = angular.element('<event-thumbnail event="event" show-details="myShowDetails(event)"/>');

        //So we need to tell Angular to compile the HTML node element and to apply to the scope
        //To do this we need to call the $compile function that we injected in the beforeEach
        //and we need to create a getter function to pass the scope.

        //This code will compile the new DOM element el and link it to the current scope.
        $compile(el)(scope);

        //after setting and link the element to the scope we need to call the $digest function to update our html.
        scope.$digest();

        //print the value of the directive in the console
        //console.log(el[0].outerHTML);


    }));

    /* BIND THE DATA TEST */
    it('should bind the data', function () {

        //First the test will verifies if
        expect(el.text()).toContain('Event Name');
    });

    /*BIND TO THE SCOPE's EVENT TEST*/
    it('should bind to the scope\'s event', function () {

        //To test the call for the scope's event is correct we need to click on it, to do this we can simply call the click() method.
        //The el.click();  should work, but don't worked with me, so we can use the JQlite to simulate the click()
        el.triggerHandler('click');

        //The function called when we click in a event is the showDetails() function
        expect(stubShowDetails.called).toBe(true);

    })


});