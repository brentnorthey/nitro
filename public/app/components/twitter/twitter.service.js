twitterApp.factory("twitter", ['$http', function ($http) {
    var twitter = {};

    twitter.getRecentTweets = function (screenName) {

        return $http.get('twitter/token?path=statuses/user_timeline&params='+screenName);
    };

    return twitter;
}]);