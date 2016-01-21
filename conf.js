exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/browse.feature'],
    framework: 'cucumber',
    onPrepare: function() {
        browser.driver.manage().window().maximize();
    },
    cucumberOpts: {
        format: "pretty"
    }

};