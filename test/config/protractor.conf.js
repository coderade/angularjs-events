
exports.config = {

    //The address for the selenium server, but by default the server will be running in 'http://localhost:4444/wd/hub'.
    // if you want to change the port, you can use 'webdriver-manager start --selenium Port XXXX' when you start your webdriver-manager
    seleniumAddres: 'http://localhost:4444/wd/hub',

    //Array of test files to be run in our test
    specs: ['../e2e/**/*.js'],

    //The capabilities object describes the browser to be tested against. For a full list of options,
    //see the reference config file: <https://github.com/angular/protractor/blob/master/docs/referenceConf.js>.
    capabilities: {
        browserName: 'chrome'
    }


};