var IndexCtrl = function($scope, $location, $http, productData){
    // $scope.data = {};
    // $scope.data.products = [
    //     {"name": "Shoe", "description": "Old Red smelly", "price": 0.22 },
    //     {"name": "Frisbee", "description": "Silver with a gerbil taped to it" ,  "price": 7.63 }
    // ];

    // init to an empty object
    $scope.data= {};

    // Call the productData service's loadProducts method.
    // Pass it an anonymous function that will be
    // called back when the remote call to the backend
    // is successful.
    productData.loadProducts(function(data){
        $scope.data.products = data.products;
    });

    $scope.viewPost = function(productId){
        $location.url('/product/' + productId);
    };

    $scope.navNewProduct = function(){
        $location.url('/product/new');
    };

    return productData;
};
