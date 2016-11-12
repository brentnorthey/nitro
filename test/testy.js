var twitterTest = require('webdriverio');
var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};
twitterTest
    .remote(options)
    .init()
    .url('http://eargroove.pagekite.me')
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
})

    .end();