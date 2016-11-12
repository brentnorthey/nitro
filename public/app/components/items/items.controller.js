twitterApp.controller('items', function($rootScope, $scope, $http, $state, itemList, addToList, deleteFromList) {


    $scope.getItemList = function () {
        itemList.getItemList().success(function (response) {
            $scope.itemList = response;
        });
    };

    $scope.init = function () {
        $scope.getItemList();
    };

    $scope.$on('MyEvent', function(event, data) {
        $scope.getItemList();
    });

    $scope.addProduct = function ()  {
        var itemModel = {
            "product": {
                "title": "Super Slick DJ Trick CD",
                "body_html": "This is the Body of HTML",
                "vendor": "eargroove",
                "product_type": "Cow Disc",
                "tags": "Groove, FlashFunk, Chone STylee"
            }
        };
        addToList.add(itemModel);
        $scope.getItemList();
    };

    $scope.deleteItem = function ()  {
        deleteFromList.delete($scope.id);
        $scope.getItemList();
        $state.go('items');
    };

    $scope.init();

});
