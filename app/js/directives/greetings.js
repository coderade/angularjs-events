
/**
 * Directive created for demonstrate the sharing of directives controller using the directive's atribute require
 */
'use strict';
eventsApp
    .directive('grettings', function(){
    return {
        restrict: 'E',
        replace: true,
        transclude: true, //=> Directive that marks the insertion point for the transcluded DOM of the nearest parent
                            // directive that uses transclusion.

        //priority: 3,

        //We we use transclusion, we need prepare our template for receive the child directive using the ng-transclude directive
        template: '<div><button class="btn" ng-click="sayHello()">Say Hello</button><div ng-transclude></div></div>',
        //template: '<button class="btn" ng-click="sayHello()">Say Hello</button>',
        controller: function ($scope){ // ==> We can create our controller inside of the directive
            var grettings = ['Hello'];
            $scope.sayHello = function () {
                alert(grettings.join());
            }
            this.addGretting = function(gretting){
                grettings.push(gretting);
            }
        }

        // controller: 'GrettingsController' => We can can call a controller outside the directive

        //controller: '@', //We can define our controller in our scope, using the at sing we wait the controller will be
        //passed in our html

        //name: 'ctrl' // is the name of atribute use to receive our controller.
    }
})
    .directive('frenchGrettings', function(){
        return {
            restrict: 'A',
            //terminal : true, ==> The terminal property tells Angular to skip all directives on that element that comes
            // after it (lower priority).

            //priority: 1 //Using priority we defined wich directive should be called first. Directives with greater
            // numerical priority are compiled first. .
            require: '^grettings', //Using require property allows to use the controller of other directive
            link: function(scope, element, attrs, controller){
                controller.addGretting('Bonjour')
            }
        }
    })

    .directive('spanishGrettings', function(){
        return {
            restrict: 'A',
            require: '^grettings', //When you know that the directive will go inside other directive, we need to say in
                                    //the require to search upwords in the DOM element and search for the named directive
                                    // and use transclude in the father directive besides edit the directives'
                                    // father template for use the child directive.

            //require: 'grettings',
            //priority: 5,
            link: function(scope, element, attrs, controller){
                controller.addGretting('Hola')
            }
        }
    })

//
//eventsApp.controller('GrettingsController',
//    function GrettingsController ($scope) {
//        $scope.sayHello = function () {
//            alert('Hello');
//        }
//    });