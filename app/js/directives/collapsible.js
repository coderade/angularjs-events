
/**
 * Directive created for demonstrate the use of transclude directive in angular.
 * See the collapsible directive in the EventDetails view
 *
 * --In computer science, transclusion is the inclusion of a document or part of a document into another document
 * ---by reference. So in the context of Angular, transclusion would be the embedding of an end user template into the
 * ----directive template, or the directive template into the end user template.
 *
 * With transclusion in angular we avoid the losing content nested inside a directive
 *
 * Read more about transclusion in angular in : <https://nulogy.com/articles/transclusion-in-angular#.VhSWAHUViko>
 *
 * I'm not using this directive in the project, but I leave this here for didactic purposes.
 */


'use strict';
eventsApp.directive('collapsible', function(){
    return{
        restrict: 'E',
        replace: true, // replace is deprecated in the angular version 1.3.0

        transclude: true, //tell this directive to use transclusion

        //For demonstrate the use of transclusion we created a click listener in our event title, when we call this
        //listener it call a method of our controller changing the visibility of he tag with transclusion

        template:  '<div>' +
                        '<h4 class="well-title" ng-click="toggleVisibility()">{{title}}</h4>' +
                        '<div  ng-show="visible" ng-transclude> </div>' +
                    '</div>',

        controller: function($scope){
          $scope.visible = true;
            $scope.toggleVisibility = function(){
                $scope.visible = !$scope.visible;
            }
        },
            scope: {
            title: '@'
        }
    }
})