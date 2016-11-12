var assert = require('assert');
describe('webdriver.io page', function() {
    it('Title should be correct', function () {
        browser.url('http://eargroove.pagekite.me');
        var title = browser.getTitle();
        assert.equal(title, 'twitter');
    });
    it('Populated screen name should be "NitroHQ', function () {
        browser.url('http://eargroove.pagekite.me');
        var screenName = $('.screen-name');
        browser.setValue('.screen-name','NitroHQ');
        browser.click('.btn-list');
        browser.pause(3000);
        screenName =  browser.getValue('.screen-name');
        assert.equal(screenName, 'NitroHQ');
    });

    it('Populated tweet list greater than one', function () {
        browser.url('http://eargroove.pagekite.me');
        var tweetCount = $('.tweet-list').length;
        if(tweetCount > 1)
            return true;
    });
}); 
