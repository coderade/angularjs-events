/**
 * Directive created to demonstrate how to use of a gravatar library natively in Javascript using AngularJS
 *
 * Gravatar (a portmanteau of globally recognized avatar) is a service for providing globally unique avatars which was
 * created by Tom Preston-Werner. Since 2007, it has been owned by Automattic, who have integrated it into their WordPress
 * blogging platform. by: https://en.wikipedia.org/wiki/Gravatar
 */
'use strict';
eventsApp.directive('gravatar', function(gravatarUrlBuilder){
    return {
        restrict: 'E',
        template: '<img />',
        replace: true,
        //replace ([DEPRECATED!], will be removed in next major release - i.e. v2.0) specify what the template should
        //replace. Defaults to false.
        //#true - the template will replace the directive's element
        //#false - the template will replace the contents of the directive's element.
        //The replacement process migrates all of the attributes / classes from the old element to the new one.

        link: function(scope, element, attrs, controller){
            //Using $observe method, this will be invoked whenever the atribute especified on a element changes
            attrs.$observe('email', function(newValue, oldValue){
                //If the user change the value of the email input we'll call the method buildGravatarUrl of the created
                //service gravatarUrlBuildler passing as parameter the new value.
                //For make this we need use the angular's directive method $set.

                if(newValue !== oldValue){
                    //$set - Set DOM element attribute value.
                    attrs.$set('src', gravatarUrlBuilder.buildGravatarUrl(newValue));
                }
            })
        }
    }
})