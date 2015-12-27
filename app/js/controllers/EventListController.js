/**
 * Controller created to use to list the events of the site.
 */
eventsApp.controller('EventListController',
    function EventListController ($scope, $location, eventData){
        
        //Method to get all events, for fo this we need to call the getAllEvents() method of the eventData service.
        $scope.events = eventData.getAllEvents();

        //Method created to direct for event details, for do this we need only redirect for the event page using your id.
        $scope.navigateToDetails = function (event) {
            $location.url('/event/' + event.id);
        }
})