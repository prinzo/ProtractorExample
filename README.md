# ProtractorExample
Using protractor and cucumber to test an angular website

An example using scenario outlines with protractor and cucumber for an angular js application.

The site that is tested is angularjs.org

Scenario is poor but is defined to show you how to use a scenario outline.

##Setup

Checkout the repo

Run npm install

Start your selenium server

In conf.js update "seleniumAddress" to your selenium server address.

```
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
```

Run protractor conf.js
