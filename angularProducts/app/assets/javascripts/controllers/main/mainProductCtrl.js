
var ProductCtrl = function($scope, $routeParams, $http, productData){
    $scope.data = productData.products[0];

    // Need to pass a callback here, so we wait for the return from the
    // remote service
    productData.loadProduct($routeParams.productId, function(data){
        $scope.data.product = data.product
    });
};
