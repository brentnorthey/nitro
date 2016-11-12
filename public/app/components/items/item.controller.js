twitterApp.controller('product', function($rootScope, $scope, $http, $state, $stateParams, productList, deleteFromList) {

    $scope.getItemDetail = function () {
        productList.getProductList().success(function (response) {
            $scope.itemDetail = response.products[$stateParams.id];
            $scope.id = $scope.itemDetail.id;
            $scope.inventory = $scope.getItemVariants().inventory;
            $scope.name = $scope.getItemVariants().name;
            $scope.type = $scope.getItemVariants().type;
            $scope.price = $scope.getItemVariants().price;
            $scope.options = $scope.getItemVariants().options;
            console.warn($scope.itemDetail)
        });
    };

    $scope.getItemDetail();

    $scope.deleteItem = function ()  {
        deleteFromList.delete($scope.id);
        $rootScope.$broadcast("deleteItem",$scope.id);
    };

    $scope.getItemVariants = function () {
        var variantObj= {
            'price': 0,
            'inventory': 0,
            'type': '',
            'options': []
        };

        _.each($scope.itemDetail.variants, function (variant) {
            variantObj.inventory += variant.inventory_quantity;
            variantObj.product_id = variant.product_id;
            variantObj.name = variant.option1.name;
            variantObj.type += ' '+variant.option1;
            variantObj.price = variant.price;
        });

        _.each($scope.itemDetail.options, function (option) {
            variantObj.options.push(option);
        });

        return variantObj
    };
});