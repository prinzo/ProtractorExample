var chai = require('chai');

var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var expect = chai.expect;

module.exports = function () {

    this.Given(/^I go to angular's website and I enter (.*) into the name box$/, function (text) {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys(text);


    });

    this.Then(/^the greeting should be (.*)$/, function (greetingText) {
        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).to.eventually.equal(greetingText);
    });
}