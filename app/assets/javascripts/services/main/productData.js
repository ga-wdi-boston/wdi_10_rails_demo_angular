// productData wraps a remote service that provides product data.
// It's used by controllers to get remote data
angular.module('StoreFront').factory('productData',['$http', function($http){

    // Init a the product data with heading
    var productData = {products: [
        { name: "Loading Products",description: "",price: '' }
    ]};

    // method to get all the products.
    productData.loadProducts = function(callback){
        $http.get('./products.json').success(function(data){
            callback(data);
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };
    //    productData.loadProducts = function(){
    //     $http.get('./products.json').success(function(data){
    //         // assign JSON from remote service.
    //         productData.products = data.products;
    //         console.log('Successfully loaded products');
    //     })
    //     .error(function(){
    //         console.log('Failed to load products');
    //     });
    // };

    // method to get one product by id.
    productData.loadProduct = function(productId, callback){
        $http.get('products/' + productId + '.json')
            .success(function(data){
                callback(data)
                console.log('Successfully loaded product ' + productId);
            })
            .error(function(){
                console.log('Failed to load product ' + productId);
            });
    }; // end of productData method

    // return the productData
    return productData;
}]);
