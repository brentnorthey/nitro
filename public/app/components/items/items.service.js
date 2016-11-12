twitterApp.factory("itemList", ['$http',function($http){
    var list = {};

    list.getItemList = function () {
       return $http.get('shopify/get?path=/admin/items.json');
    };
    return list;
}]);

twitterApp.factory("addToList", ['$http', function($http){
    console.log($http);
    var itemModel = {};
    itemModel.add = function (itemModel) {
        return $http.post('shopify/post?path=/admin/items.json', itemModel);
    };

    return itemModel;
}]);

twitterApp.factory("deleteFromList", ['$http', function($http){
    var itemModel = {};
    itemModel.delete = function (id) {
        return $http.delete('shopify/delete?path=/admin/items/'+id+'.json');
    };

    return itemModel;
}]);