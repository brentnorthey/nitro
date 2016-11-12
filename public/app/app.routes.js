twitterApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/twitter');

    $stateProvider

        // .state('items', {
        //     url:"/items",
        //     views: {
        //         "item-list": {templateUrl: 'app/components/items/item.list.html', controller: 'items'}}
        // })
        //
        // .state('items.detail', {
        //     url:"/detail/:id",
        //     views: {
        //         "item-detail@": {templateUrl: 'app/components/items/item.detail.html', controller: 'item'}
        //     }
        // })

        .state('twitter', {
            url:"/twitter",
            views: {
                "twitter-view": {templateUrl: 'app/components/twitter/twitter.html', controller: 'twitter'}}
        })
});