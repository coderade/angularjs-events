/**
 *Directive created to be used in the vote of the project's artists
 */
'use strict';
eventsApp.directive('upvote', function(){
    return {
        restrict: 'E',
        templateUrl: '/templates/directives/upvote.html',
        scope:{
            upvote:'&', //we don't need especify the name of parameter because it matchs the main name of my selected scope
            downvote:'&',//using & we spect that the function will be execut in the parent
            //count:'=' //Expects receive the object upVoteCount seted in your parent scope
            count: '@' //If you use the at-sign, the value received will be the string seted in your parent scope
        }
    }
})