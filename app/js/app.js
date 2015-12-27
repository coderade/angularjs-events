'use strict';
/*Main file of your application, here we created our main module, call our providers and we define our routes*/
var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngCookies'])
//var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider.when('/newEvent', //When the /newEvent is passed in the url, it will call the:
			{
				templateUrl: 'templates/newEvent.html', //templateUrl: the template of the page
				controller: 'EditEventController' //the controller of the page
			});
		$routeProvider.when('/events',
			{
				templateUrl: 'templates/EventList.html',
				controller: 'EventListController'
			});
		//$routeProvider.when('/event/:eventId',
		//	{
         //       //template: 'test', //Instead of use a templateUrl, we can only use a defined template for our
		//		//url.
        //
		//		templateUrl: 'templates/EventDetails.html',
		//		controller: 'EventController'
		//		//resolve:{
		//		//	event: function($route, eventData){
		//		//		return eventData.getEvent($route.current.pathParams.eventId).$promise;
		//		//	}
		//		//}
		//	});
        $routeProvider.when('/events/:eventId/artists/edit/:artistId', {
                templateUrl: 'templates/editArtist.html',
                controller: 'EditArtistController'
            });
        $routeProvider.when('/events/:eventId/artists/new', {
                templateUrl: 'templates/editArtist.html',
                controller: 'EditArtistController'
            });

		$routeProvider.when('/sampleDirective',{
			templateUrl:'templates/SampleDirective.html',
			controller:'SampleDirectiveController'
		    });

        $routeProvider.when('/events/new',
            {
                templateUrl: '/templates/editEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/events/edit/:eventId', {
            templateUrl: '/templates/editEvent.html',
            controller: 'EditEventController'
            });
        $routeProvider.when('/event/:eventId', {
            templateUrl: '/templates/event.html',
            controller: 'EventController'
        });
        $routeProvider.when('/register', {
            templateUrl: '/templates/editProfile.html',
            controller: 'EditProfileController'
            });
        $routeProvider.when('/editProfile', {
            templateUrl: '/templates/editProfile.html',
            controller: 'EditProfileController'
             });
        $routeProvider.when('/viewProfile/:userName', {
            templateUrl: '/templates/viewProfile.html',
            controller: 'ViewProfileController'
            });
        $routeProvider.when('/login', {
            templateUrl: '/templates/login.html',
            controller: 'LoginController'
            });
        $routeProvider.when('/cache', {
                templateUrl: 'templates/samples/cache.html',
                controller: 'CacheSampleController'
            });
        $routeProvider.when('/cookie', {
            templateUrl: 'templates/samples/cookieStore.html',
            controller: 'CookieStoreSampleController'
            });
        $routeProvider.when('/compiling', {
            templateUrl: 'templates/samples/compileDirective.html',
            });
        $routeProvider.when('/sharing', {
            templateUrl: 'templates/samples/sharingDirectives.html',
            });
        $routeProvider.when('/filters', {
            templateUrl: 'templates/samples/filters.html',
            controller: 'FilterSampleController'
            });
        $routeProvider.when('/timeout', {
            templateUrl: 'templates/samples/timeout.html',
            controller: 'TimeoutSampleController'
        });
        $routeProvider.when('/locale', {
            templateUrl: 'templates/samples/locale.html',
            controller: 'LocaleSampleController'
        });
        //otherwise: triggers a redirection to /events when the browser address doesn't match either of our routes.
        $routeProvider.otherwise({
            redirectTo: '/events'
        });
		$locationProvider.html5Mode(true);
    });

//provider used in the cache sample, if you don't want use it comment these lines
eventsApp.factory('myCache', function($cacheFactory) {
	return $cacheFactory('myCache', {capacity:3});
});


