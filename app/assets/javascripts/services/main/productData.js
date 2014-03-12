// productData wraps a remote service that provides product data.
// It's used by controllers to get remote data
angular.module('StoreFront').factory('productData',['$http', function($http){

    // Init a the product data with heading
    var productData = {products: [
        { name: "Loading Products",description: "",price: '' }
    ]};

    // method to get all the products.
    productData.loadProducts = function(){
        $http.get('./products.json').success(function(data){
            // assign JSON from remote service.
            debugger;
            productData.products = data.products;
            console.log('Successfully loaded products');
        })
        .error(function(){
            console.log('Failed to load products');
        });
    };

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

    productData.createProduct = function(newProduct) {
      var data;
      if (newProduct.newProductPrice === '' || newProduct.newProductDescription === '') {
        alert('Neither the Price nor the Description are allowed to be left blank.');
        return false;
      }
      data = {
        new_product: {
          name: newProduct.newProductName,
          price: newProduct.newProductPrice,
          description: newProduct.newProductDescription
        }
      };
      $http.post('./products.json', data).success(function(data) {
        debugger;
        productData.products.push(data);
        return console.log('Successfully created product.');
      }).error(function() {
        return console.error('Failed to create new product.');
      });
      return true;
    };

    // return the productData
    return productData;
}]);
