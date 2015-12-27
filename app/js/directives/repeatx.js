/**
 *Directive created for demonstrate the use of the compile directive.
 *
 *Compiles an HTML string or DOM into a template and produces a template function, which can then be used to link
 *scope and the template together.
 */

//We create the repeatX directive that will repeat the value of the element, the  amount of times that we define in your
//view-directive.

//Compile is not recommended for performance reasons, DOM manipulation is not recommended too
eventsApp.directive('repeatX', function ($compile) {
    return{
        //link: function (scope, element, attrs, controller) {
        //    for(var i = 0; i< Number(attrs.repeatX)-1;  i++){
        //        //after() will returns an  DOM element(s), to insert after each element inthe set of matched elements
        //        //we will clone the element setting the number of repetitions zero in your atribute
        //        // element.after(element.clone().attr('repeat-x',0));
        //
        //
        //        //Using the compile service for compile this element before we append it
        //        //Argument 'scope' is required
        //        element.after($compile(element.clone().attr('repeat-x',0))(scope));
        //    }
        //}

        //Using the compile function, the scope is not available because the compile is onlink for making DOM manipulations
        //and not for binding the scope or adding watches


        //The compile function affects all instances of the directive
        compile: function ( element, attrs) {
            for(var i = 0; i< Number(attrs.repeatX)-1;  i++){
                element.after(element.clone().attr('repeat-x',0));
            }

            //We can return for a compile function a link function
            return function (scope, element, attrs, controller ) {
                attrs.$observe('text', function (newValue) { //observe the text element
                    if (newValue === 'Hello World'){
                        element.css('color', 'green');// can change the css of a element using the css function
                    }
                })
            };
            //The link function runs individually for each directive
        }
    }
})
