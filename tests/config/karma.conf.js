module.exports = function(config){
    config.set({

        basePath : '../../app', //This is the path relative to the configuration file is root, is the root of all files used
        //in this file

        //The preprocessor section is an object that we use to pur all files that we want them to be preprocessed
        //In this case, we want the all html files are preprocessed
        preprocessors: {

            //We need to set wich file will be preprocessed and the name of the preprocesser
            'templates/**/*.html': 'ng-html2js'
        },
        files : [ //Array of files
            'lib/angular/angular.min.js',
            'lib/angular-mocks/angular-mocks.js',
            'lib/angular-route/angular-route.min.js',
            'lib/angular-resource/angular-resource.min.js',
            'lib/angular-cookies/angular-cookies.min.js',
            'lib/sinonjs/sinon.js', //Sinon.js is a really helpful library when you want to unit test your code
            'js/**/*.js',
            '../tests/unit/**/*.js',
            'templates/directives/*.html' //I need to set this for test my directives
        ],

        autoWatch : true, //watch the files for changes

        frameworks: ['jasmine'], //testing framework used in this test

        browsers : ['Chrome'],//Browsers that you that karma run your tests

        plugins : [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ]
    });
};
