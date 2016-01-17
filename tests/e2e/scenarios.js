/**
* <--Test End2End of the application-->
* Test created to demonstrate how to create tests End2End using Protractor
*/


'use strict';

describe('angular events app', function () {

   /* EVENTS PAGE TEST*/
   describe('events page', function () {

       //We need to navigate to the events page, so we can to tell Protractor to go to the page that we want to go to.
       beforeEach(function () {

           //browser => A wrapper around an instance of WebDriver, used for navigation and page-wide information.
           //The browser.get method loads a page.

           //tell the browser to go to the events url
           browser.get('http://localhost:8000/events/');
       });

       it('should have the correct title and first event', function () {

           //@element.all = https://angular.github.io/protractor/#/api?view=ElementArrayFinder
           //@by.repeater = Find elements inside an ng-repeat.

           //We need to get the array of events, to do this we need use the Protractor by.repeat() method to find
           // elements inside of our ng-repeater of events, and the element.all() method to receive this values
           var events = element.all(by.repeater('event in events'));

           //So we expect that the number of events is equals 4
           expect(events.count()).toEqual(4);

           //We need to get the first title of our events, to do this we need to use the by.bynding Protractor method
           // to find an element by text binding and the element to receive this value
           //A warning will appears:  WARNING - more than one element found for locator by.binding("event.name") -
           //  the first result will be used
           var titleElement = element(by.binding('event.name'));

           //So we expect that the first Title of our events is equals to Tomorrowland
           expect(titleElement.getText()).toEqual('Tomorrowland');
       });

   });

   /* EVENTS DETAILS PAGE TEST*/
   describe('events details page', function () {

       //We need to navigate to the events details page with the ID 1
       beforeEach(function () {
           browser.get('http://localhost:8000/event/1')
       });

       it('should short by name', function(){

           var artists = element.all(by.repeater('artist in event.artists'));


           //We need to get the first name of the event Tomorrowland using the first() of the element
           var artistName = artists.first().element(by.binding('artist.name'));

           //So we expect that name of the first Artist of the event Tomorrowland sorted by name is 'Dimitri Vegas and Like Mike'
           expect(artistName.getText()).toEqual('Dimitri Vegas and Like Mike');
       });

       it('should have 5 artists', function() {

           //We need to get all artists and count them
           var artists = element.all(by.repeater('artist in event.artists'));

           //So we expect that the number of artists is equals 5
           expect(artists.count()).toEqual(5);
       });

       it('should have 2 artists when a rating of 3 stars is chosen', function () {

           //@by.cssContainingText => Find elements by CSS which contain a certain string.
           //@by.model => //@by.cssContainingText => Find elements by CSS which contain a certain string.


           //We need to get the select input using the by.model() method to get selected value of the model 'query'
           var selectEl = element(by.model('query'));

           //And we need to select the element by CSS wich contain the string 'option' and the value 3 stars using the
           // click() method.
           selectEl.element(by.cssContainingText('option', '3 stars')).click();

           //So we'll get the selected artists
           var artists = element.all(by.repeater('artist in event.artists'));

           //And we we expect that the number of artists with a rating of 2 stars is equals 2
           expect(artists.count()).toEqual(2);

       });

       it('should sort correctly when sortOrder is changed', function () {

           //We need to get the select input using the by.model() method to get selected value of the model 'sortorder'
           var selectEl = element(by.model('sortorder'));

           //And we need to select the element by CSS wich contain the string 'option' and the value 'Votes' using the
           // click() method.
           selectEl.element(by.cssContainingText('option', 'Votes')).click();


           //var artistName = artists..element(by.binding('artist.name'));

           //So we need o get the firstArtist
           var firstArtist = element.all(by.repeater('artist in event.artists')).first();

           //console.log(firstArtist);
           //And the name of this artist
           var firstArtistName = firstArtist.element(by.binding('artist.name')).getText();

           //Then we expect that the name of the artist is equals to 'Hardwell'
           expect(firstArtistName).toEqual('Hardwell');
       });

   });

 });