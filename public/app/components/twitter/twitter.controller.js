twitterApp.controller('twitter', function($rootScope, $scope, $http, $state, $stateParams, twitter) {
    $scope.getRecentTweets = function () {
        $scope.recentTweets = {};
        twitter.getRecentTweets($scope.screenName).success(function (response) {
            $scope.recentTweets = response;
        });
    };
});

twitterApp.filter('renderHTML', function ($sce) {
    return function (stringToParse) {
        return $sce.trustAsHtml(stringToParse);
    }
});