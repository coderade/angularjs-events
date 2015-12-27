/**
 * First directive, to be used as example
 */
'use strict';

eventsApp.directive('mySample', function($compile){
    return{
        //restrict: 'A', ==> The restrict A will set our directive like a Html element, the id the default use by the angular
        //restrict: 'C', ==> our directive will be set like a class element
        // restrict: 'M', ==> our directive will be set like a html comment, Very cool!
        restrict: 'E', //==> our directive will be set like a html element
        //link: function(scope, element, attrs, controller){
        //    var markup = "<input type='text' ng-model='sampleData'/> {{sampleData}} <br/>";
        //    //angular.element (<element>).html(<value>)==> get the element, like the use of jquery.getElementById and set the html markup
        //    angular.element(element).html($compile(markup)(scope));
        //}

        //Instead of using link with a function you can use only the template property and put
        //the html inside of it, so we don't need compile it
        template:"<input type='text' ng-model='sampleData'/> {{sampleData}} <br/>",
        scope: {}// By default the inherits from its parent scope. When you created a scope without values, we broke this inheritance
    };
})