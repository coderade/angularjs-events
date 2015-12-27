/**
 * Directive created to demonstrate how to create custom validatos using directives.
 * This directive will allow only date keys in the inputs that it's used.
 *
 * For find the javascript char codes (key codes) look this link link: https://css-tricks.com/snippets/javascript/javascript-keycodes/
 */
eventsApp.directive('dateKeys', function(){
    return{
        restrict: 'A',
        link: function(scope, element, attrs, controller){
            //If the pressed key is one of the permited keys this directive will return true, otherwise will return false.
            element.on('keydown', function (event) {//Using the element.on()  in the kinl function for handle a event on an element
                if(isNumericKeyCode(event.keyCode) || isFowardSlashKeyCode(event.keyCode) || isNavigationKeyCode(event.keyCode)){
                    return true;
                }
                return false;
            });
        }
    }

    //Method to verify if the key pressed is a numeric key
    function isNumericKeyCode(keyCode){
        return (event.keyCode >= 48 && event.keyCode <=57)
            ||(event.keyCode >= 96 && event.keyCode <= 105)
    }

    //Method to verify if the key pressed is a foward slash (date separator)
    function isFowardSlashKeyCode(keyCode){
        return event.keyCode ===191;
    }

    //Method to verify if the key pressed is a key for navigation
    function isNavigationKeyCode(keyCode){
        switch(keyCode){
            case 8: //backspace
            case 35: //end
            case 36: //home
            case 37: //left
            case 38: //up
            case 39: //right
            case 40: //down
            case 45: //insert
            case 46: //delete
                return true;
            default:
                return false;
        }
    }
})